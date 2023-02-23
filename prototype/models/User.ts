import uuid from 'react-uuid';
import Realm from 'realm';
import { useRandomMobileNumber } from '../hooks/useRandomMobileNumber';

const PIN_LEN = 6;

export class User extends Realm.Object {
	_id!: Realm.BSON.ObjectId;
	uuid!: string;
	telephone!: string;
	pin!: string;
	createdAt!: Date;
	updatedAt!: Date;

	static generate(pin: string, telephone?: string) {
		if (telephone && !telephone.startsWith('+39') && telephone.length !== 12) {
			throw new Error(
				'Invalid telephone number (must be italian +39 and 12 digits long)'
			);
		}

		if (pin.length !== PIN_LEN && !Number.isInteger(Number(pin))) {
			throw new Error('Invalid pin, must be 6 digits');
		}

		return {
			_id: new Realm.BSON.ObjectId(),
			uuid: uuid(),
			telephone: telephone ?? useRandomMobileNumber(),
			pin,
			createdAt: new Date(),
			updatedAt: new Date(),
		};
	}

	static schema: Realm.ObjectSchema = {
		name: 'User',
		primaryKey: '_id',
		properties: {
			_id: { type: 'objectId', default: new Realm.BSON.ObjectId() },
			uuid: { type: 'string', default: uuid() },
			telephone: { type: 'string' },
			pin: { type: 'string' },
			createdAt: { type: 'date', default: new Date() },
			updatedAt: { type: 'date', default: new Date() },
		},
	};
}
