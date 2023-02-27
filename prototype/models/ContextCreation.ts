import { createRealmContext } from '@realm/react';
import { StatsTravel } from './StatsTravel';
import { User } from './User';
import { Vehicle } from './Vehicle';
import { VehicleDataPiece } from './VehicleDataPiece';
import { ChatMessage } from './ChatMessage';
import { VehicleReminder } from './VehicleReminder';

const config = {
	schema: [
		Vehicle,
		User,
		VehicleDataPiece,
		StatsTravel,
		ChatMessage,
		VehicleReminder,
	],
	schemaVersion: 22,
};

export default createRealmContext(config);
