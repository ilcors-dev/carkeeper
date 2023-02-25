import { FlatList, Text, View } from 'react-native';
import { Results } from 'realm';
import ContextCreation from '../../models/ContextCreation';
import { Vehicle } from '../../models/Vehicle';
import { VehicleSpaceItem } from '../VehicleSpace/VehicleSpaceItem';

export const VehicleSpaceList = () => {
	const { useQuery } = ContextCreation;
	const vehicles = useQuery<Vehicle>(Vehicle) as Results<Vehicle>;

	return (
		<View>
			<FlatList
				data={vehicles}
				keyExtractor={(space) => space._id.toString()}
				renderItem={({ item }) => <VehicleSpaceItem vehicle={item} />}
			/>
		</View>
	);
};
