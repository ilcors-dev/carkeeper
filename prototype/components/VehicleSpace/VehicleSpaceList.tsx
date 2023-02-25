import { FlatList, Text, View } from 'react-native';
import { Results } from 'realm';
import ContextCreation from '../../models/ContextCreation';
import { Vehicle } from '../../models/Vehicle';
import { VehicleSpaceItem } from '../Vehicle/VehicleSpaceItem';

export const VehicleSpaceList = () => {
	const { useQuery } = ContextCreation;
	const spaces = useQuery<Vehicle>(Vehicle) as Results<Vehicle>;

	return (
		<View>
			<FlatList
				data={spaces}
				keyExtractor={(space) => space._id.toString()}
				renderItem={({ item }) => (
					<VehicleSpaceItem uuid={item.uuid} createdAt={item.createdAt} />
				)}
			/>
		</View>
	);
};
