import { createRealmContext } from '@realm/react';
import { VehicleSpace } from './VehicleSpace';

const config = {
	schema: [VehicleSpace],
	schemaVersion: 1,
};

export default createRealmContext(config);
