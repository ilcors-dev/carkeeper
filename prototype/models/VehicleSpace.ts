import { createRealmContext } from '@realm/react';
import uuid from 'react-uuid';
import Realm from 'realm';

export class VehicleSpace extends Realm.Object {
	_id!: Realm.BSON.ObjectId;
	uuid!: string;

	static generate() {
		return {
			_id: new Realm.BSON.ObjectId(),
			uuid: uuid(),
		};
	}

	static schema: Realm.ObjectSchema = {
		name: 'VehicleSpace',
		primaryKey: '_id',
		properties: {
			_id: 'objectId',
			uuid: 'string',
		},
	};
}
