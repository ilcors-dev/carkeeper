import { createRealmContext } from '@realm/react';
import { User } from './User';
import { Vehicle } from './Vehicle';
import { VehicleDataPiece } from './VehicleDataPiece';

const config = {
	schema: [Vehicle, User, VehicleDataPiece],
	schemaVersion: 8,
};

export default createRealmContext(config);
