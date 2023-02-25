import uuid from 'react-uuid';
import Realm from 'realm';

export class Vehicle extends Realm.Object {
	_id!: Realm.BSON.ObjectId;
	uuid!: string;
	createdAt!: Date;
	updatedAt!: Date;

	static generate() {
		return {
			_id: new Realm.BSON.ObjectId(),
			uuid: uuid(),
			createdAt: new Date(),
			updatedAt: new Date(),
		};
	}

	static generateOBD(obdCode: string) {
		return {
			_id: new Realm.BSON.ObjectId(),
			uuid: obdCode,
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
			createdAt: { type: 'date', default: new Date() },
			updatedAt: { type: 'date', default: new Date() },
		},
	};
}