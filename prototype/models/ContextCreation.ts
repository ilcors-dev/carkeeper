import { createRealmContext } from '@realm/react';
import { StatsTravel } from './StatsTravel';
import { User } from './User';
import { Vehicle } from './Vehicle';
import { VehicleDataPiece } from './VehicleDataPiece';
import { ChatMessage } from './ChatMessage';

const config = {
	schema: [Vehicle, User, VehicleDataPiece, StatsTravel, ChatMessage],
	schemaVersion: 19,
};

export default createRealmContext(config);
