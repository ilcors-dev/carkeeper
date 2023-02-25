import { createRealmContext } from '@realm/react';
import { User } from './User';
import { Vehicle } from './Vehicle';

const config = {
	schema: [Vehicle, User],
	schemaVersion: 2,
};

export default createRealmContext(config);
