import uuid from 'react-uuid';
import Realm from 'realm';

export class StatsTravel extends Realm.Object {
	_id!: Realm.BSON.ObjectId;
	uuid!: string;
	uuidVehicle!: string;

	inizio!: Date;
	fine!: Date;
	durata!: number;

	km_inizio!: number;
	km_fine!: number;
	km_percorsi!: number;

	carburante_inizio!: number;
	carburante_fine!: number;
	carburante_usato!: number;
	consumo_medio!: number;

	velocita_media!: number;
	velocita_massima!: number;

	createdAt!: Date;
	updatedAt!: Date;

	static generate(uuidVehicle: string) {
		// past date between 1 and 30 days ago
		let pastDate = new Date(new Date().getTime() - (Math.random() * (30 - 1) + 1) * 24 * 60 * 60 * 1000);
		let now = new Date();
		let durata = now.getTime() - pastDate.getTime();

		// km between 0 and 10000
		let km_inizio = Math.floor(Math.random() * 100000);

		// add to km_inizio number between 10 and 1000
		let km_fine = km_inizio + Math.floor(Math.random() * (1000 - 10) + 10);
		let km_percorsi = km_fine - km_inizio;

		// consumo_medio between 6 to 10
		let consumo_medio = Math.floor(Math.random() * (10 - 6) + 6);

		// carburante_inizio between 50 and 100
		let carburante_inizio = Math.floor(Math.random() * (100 - 50) + 50);
		let carburante_usato = Math.floor(km_percorsi / consumo_medio);
		let carburante_fine = carburante_inizio - carburante_usato;

		// velocita_media between 60 and 90
		let velocita_media = Math.floor(Math.random() * (90 - 60) + 60);
		// velocita_massima between 100 and 150
		let velocita_massima = Math.floor(Math.random() * (150 - 100) + 100);

		return {
			_id: new Realm.BSON.ObjectId(),
			uuid: uuid(),
			uuidVehicle: uuidVehicle,
			inizio: pastDate,
			fine: now,
			durata: durata,
			km_inizio: km_inizio,
			km_fine: km_fine,
			km_percorsi: km_percorsi,
			carburante_inizio: carburante_inizio,
			carburante_fine: carburante_fine,
			carburante_usato: carburante_usato,
			consumo_medio: consumo_medio,
			velocita_media: velocita_media,
			velocita_massima: velocita_massima,
			createdAt: new Date(),
			updatedAt: new Date(),
		};
	}

	static schema: Realm.ObjectSchema = {
		name: 'StatsTravel',
		primaryKey: '_id',
		properties: {
			_id: { type: 'objectId', default: new Realm.BSON.ObjectId() },
			uuid: { type: 'string', default: uuid() },
			uuidVehicle: { type: 'string' },
			inizio: { type: 'date' },
			fine: { type: 'date' },
			durata: { type: 'int' },
			km_inizio: { type: 'int' },
			km_fine: { type: 'int' },
			km_percorsi: { type: 'int' },
			carburante_inizio: { type: 'int' },
			carburante_fine: { type: 'int' },
			carburante_usato: { type: 'int' },
			consumo_medio: { type: 'int' },
			velocita_media: { type: 'int' },
			velocita_massima: { type: 'int' },
			createdAt: { type: 'date', default: new Date() },
			updatedAt: { type: 'date', default: new Date() },
		},
	};
}
