import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { Text, TouchableOpacity, View } from 'react-native';
import ContextCreation from '../../models/ContextCreation';
import { VehicleReminder } from '../../models/VehicleReminder';

interface Props {
	reminder: VehicleReminder;
}

export const VehicleReminderItem = ({ reminder }: Props) => {
	const navigation = useNavigation();
	const { useRealm } = ContextCreation;
	const realm = useRealm();

	const isExpiring = moment(reminder.expiresAt).isBefore(
		moment().add(1, 'week')
	);

	const remove = () => {
		realm.write(() => {
			realm.delete(reminder);
		});
	};

	return (
		<View className="my-1 border-b border-white flex flex-row justify-between items-center">
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('VehicleShowReminder', {
						_id: reminder._id,
					});
				}}
			>
				<View className="flex flex-row space-x-4 items-center p-2">
					{isExpiring && (
						<FontAwesome
							className="animate-pulse"
							name="exclamation"
							size={32}
							color="#fff"
						/>
					)}
					{!isExpiring && (
						<FontAwesome name="calendar" size={16} color="#fff" />
					)}
					<View>
						<Text className="text-white uppercase">
							Scadenza {reminder.category}
						</Text>
						<Text className="text-white text-xs">
							{moment(reminder.expiresAt).format('ddd DD/MM/YYYY HH:mm')}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
			<TouchableOpacity className="p-2 bg-primary rounded-lg" onPress={remove}>
				<FontAwesome className="ml-auto" name="trash" size={16} color="#000" />
			</TouchableOpacity>
		</View>
	);
};
