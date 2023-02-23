import { createRealmContext } from '@realm/react';
import { User } from './User';
import { VehicleSpace } from './VehicleSpace';

const config = {
	schema: [VehicleSpace, User],
	schemaVersion: 2,
};

export default createRealmContext(config);
