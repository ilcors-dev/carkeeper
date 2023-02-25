import uuid from 'react-uuid';
import Realm, { List } from 'realm';
//@ts-ignore
import { getRealVin } from 'randomvin';
import { Client } from '@shaggytools/nhtsa-api-wrapper';
import { VehicleDataPiece } from './VehicleDataPiece';
import ContextCreation from './ContextCreation';

export class Vehicle extends Realm.Object {
	_id!: Realm.BSON.ObjectId;
	uuid!: string;
	vin!: string;
	vehicleData!: List<VehicleDataPiece>;
	createdAt!: Date;
	updatedAt!: Date;

	static async generateOBD(obdCode: string) {
		const vin = await getRealVin();

		return {
			_id: new Realm.BSON.ObjectId(),
			uuid: obdCode,
			vin: vin,
			createdAt: new Date(),
			updatedAt: new Date(),
		};
	}

	static schema: Realm.ObjectSchema = {
		name: 'Vehicle',
		primaryKey: '_id',
		properties: {
			_id: { type: 'objectId', default: new Realm.BSON.ObjectId() },
			uuid: { type: 'string', default: uuid() },
			vin: 'string',
			vehicleData: 'VehicleDataPiece[]',
			createdAt: { type: 'date', default: new Date() },
			updatedAt: { type: 'date', default: new Date() },
		},
	};

	async setVehicleData() {
		const { useRealm, useQuery } = ContextCreation;
		const realm = useRealm();

		const vehicleAttributes = await Client.DecodeVin(this.vin);
		console.log('Fetching vehicle data...');
		console.log(
			`Fetched vehicle data! Found ${vehicleAttributes.Results.length} items! Saving to realm...`
		);

		vehicleAttributes.Results.forEach((attribute) => {
			realm.write(() => {
				realm.create(
					'VehicleDataPiece',
					{
						...attribute,
						vehicle: this,
					},
					Realm.UpdateMode.Modified
				);
			});
		});

		console.log(useQuery(VehicleDataPiece));
	}
}
