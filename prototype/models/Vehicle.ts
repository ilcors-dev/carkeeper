import uuid from 'react-uuid';
import Realm, { List } from 'realm';
//@ts-ignore
import { getRealVin } from 'randomvin';
import { Client } from '@shaggytools/nhtsa-api-wrapper';
import { VehicleDataPiece } from './VehicleDataPiece';
import ContextCreation from './ContextCreation';
import { ChatMessage } from './ChatMessage';
import { VehicleReminder } from './VehicleReminder';

export class Vehicle extends Realm.Object {
	_id!: Realm.BSON.ObjectId;
	uuid!: string;
	vin!: string;
	vehicleData!: List<VehicleDataPiece>;
	chat!: List<ChatMessage>;
	reminders!: List<VehicleReminder>;
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
			chat: 'ChatMessage[]',
			reminders: 'VehicleReminder[]',
			createdAt: { type: 'date', default: new Date() },
			updatedAt: { type: 'date', default: new Date() },
		},
	};

	getName() {
		// todo map ids to names
		const attrs = this.vehicleData.filtered('VariableId IN {29, 26, 39}');

		return `${attrs[0]?.Value} ${attrs[1]?.Value} ${attrs[2]?.Value}`;
	}
}
