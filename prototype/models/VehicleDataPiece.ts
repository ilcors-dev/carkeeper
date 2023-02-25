import { DecodeVinResults } from '@shaggytools/nhtsa-api-wrapper/dist/types/api/actions/DecodeVin';
import Realm from 'realm';
import { Vehicle } from './Vehicle';

export class VehicleDataPiece extends Realm.Object {
	_id!: Realm.BSON.ObjectId;
	Value!: string | null;
	ValueId!: string | null;
	Variable!: string;
	VariableId!: number;
	vehicle!: Vehicle;
	createdAt!: Date;
	updatedAt!: Date;

	static generate(vehicle: Vehicle, data: DecodeVinResults) {
		return {
			_id: new Realm.BSON.ObjectId(),
			...data,
			vehicle: vehicle,
			createdAt: new Date(),
			updatedAt: new Date(),
		};
	}

	static schema: Realm.ObjectSchema = {
		name: 'VehicleDataPiece',
		primaryKey: '_id',
		properties: {
			_id: { type: 'objectId', default: new Realm.BSON.ObjectId() },
			Value: { type: 'string?' },
			ValueId: { type: 'string?' },
			Variable: { type: 'string' },
			VariableId: { type: 'int' },
			createdAt: { type: 'date', default: new Date() },
			updatedAt: { type: 'date', default: new Date() },
			vehicle: {
				type: 'linkingObjects',
				objectType: 'Vehicle',
				property: 'vehicleData',
			},
		},
	};
}
