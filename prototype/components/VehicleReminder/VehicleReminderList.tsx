import { FlatList, Text, View } from 'react-native';
import { List, Results } from 'realm';
import ContextCreation from '../../models/ContextCreation';
import { VehicleReminder } from '../../models/VehicleReminder';
import { VehicleReminderItem } from '../VehicleReminder/VehicleReminderItem';

interface Props {
	reminders: List<VehicleReminder>;
}

export const VehicleReminderList = ({ reminders }: Props) => {
	return (
		<View>
			<FlatList
				data={reminders}
				ListEmptyComponent={() => (
					<Text className="text-white">No reminders found</Text>
				)}
				keyExtractor={(space) => space._id.toString()}
				renderItem={({ item }) => <VehicleReminderItem reminder={item} />}
			/>
		</View>
	);
};
