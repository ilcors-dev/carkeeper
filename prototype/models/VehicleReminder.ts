import uuid from 'react-uuid';
import Realm from 'realm';
//@ts-ignore
import { Reminder } from './Reminder';
import { Vehicle } from './Vehicle';

export enum VehicleReminderCategory {
	BOLLO = 'Bollo',
	ASSICURAZIONE = 'Assicurazione',
	PERMESSI = 'Permessi',
	REVISIONE = 'Revisione',
}

export const VehicleCategory = [
	VehicleReminderCategory.BOLLO,
	VehicleReminderCategory.ASSICURAZIONE,
	VehicleReminderCategory.PERMESSI,
	VehicleReminderCategory.REVISIONE,
];

export class VehicleReminder extends Realm.Object {
	_id!: Realm.BSON.ObjectId;
	uuid!: string;
	category!: VehicleReminderCategory;
	notes!: string;
	expiresAt!: Date;
	createdAt!: Date;
	updatedAt!: Date;

	vehicle!: Vehicle;

	static generate(
		category: VehicleReminderCategory,
		expiresAt: Date,
		notes: string,
		vehicle: Vehicle
	) {
		return {
			_id: new Realm.BSON.ObjectId(),
			uuid: uuid(),
			category: category,
			notes: notes,
			expiresAt: expiresAt,
			createdAt: new Date(),
			updatedAt: new Date(),

			vehicle: vehicle,
		};
	}

	static schema: Realm.ObjectSchema = {
		name: 'VehicleReminder',
		primaryKey: '_id',
		properties: {
			_id: { type: 'objectId', default: new Realm.BSON.ObjectId() },
			uuid: { type: 'string', default: uuid() },
			category: 'string',
			notes: 'string',
			expiresAt: 'date',
			createdAt: { type: 'date', default: new Date() },
			updatedAt: { type: 'date', default: new Date() },

			vehicle: {
				type: 'linkingObjects',
				objectType: 'Vehicle',
				property: 'reminders',
			},
		},
	};
}
