import { createRealmContext } from '@realm/react';
import { VehicleSpace } from './VehicleSpace';

const config = {
	schema: [VehicleSpace.schema],
};

export default createRealmContext(config);
