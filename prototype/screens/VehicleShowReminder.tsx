import { FontAwesome5 } from '@expo/vector-icons';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import React, { useCallback, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import ContextCreation from '../models/ContextCreation';
import { Vehicle } from '../models/Vehicle';
import {
	VehicleCategory,
	VehicleReminder,
	VehicleReminderCategory,
} from '../models/VehicleReminder';
import { RootStackScreenProps } from '../types';
import moment from 'moment';

export default function VehicleShowReminder({
	route,
	navigation,
}: RootStackScreenProps<'VehicleShowReminder'>) {
	const { useRealm, useObject } = ContextCreation;
	const realm = useRealm();
	const reminder = useObject(
		VehicleReminder,
		route.params._id
	) as VehicleReminder;

	const [reminderData, setReminderData] = useState({
		expiresAt: reminder.expiresAt,
		category: reminder.category,
		notes: reminder.notes,
	});

	console.log(reminderData);

	const update = () => {
		realm.write(() => {
			reminder.expiresAt = reminderData.expiresAt;
			reminder.category = reminderData.category as VehicleReminderCategory;
			reminder.notes = reminderData.notes;
		});

		navigation.goBack();
	};

	return (
		<View className="flex h-screen flex-col p-5 bg-primary">
			<View className="flex flex-col space-y-4">
				<View className="flex flex-col space-y-4">
					<View className="flex flex-col space-y-2">
						<Text className="font-bold">Category:</Text>
						<SelectDropdown
							buttonStyle={{
								borderRadius: 8,
								backgroundColor: '#5371FF',
								paddingHorizontal: 8,
								borderColor: '#5371FF',
								paddingVertical: 8,
								borderWidth: 1,
								width: '100%',
								marginTop: 8,
							}}
							buttonTextStyle={{ color: '#fff' }}
							data={VehicleCategory}
							onSelect={(selectedItem, index) => {
								setReminderData({
									...reminderData,
									category: selectedItem,
								});
							}}
							defaultValue={reminder.category}
						/>
					</View>
					<View className="flex flex-col space-y-2">
						<Text className="font-bold">Expires at:</Text>
						<View className="flex flex-row space-x-4">
							<View className="p-2 px-4 rounded-lg bg-secondary text-white grow">
								<Text className="text-white my-auto">
									{moment(reminderData.expiresAt).format('DD/MM/YYYY HH:mm')}
								</Text>
							</View>

							<View className="p-2 px-4 rounded-lg bg-secondary text-white flex flex-row justify-between items-center space-x-4">
								<TouchableOpacity
									onPress={() => {
										DateTimePickerAndroid.open({
											value: reminderData.expiresAt,
											mode: 'date',
											is24Hour: true,
											minimumDate: new Date(),
											onChange: (event, date) =>
												setReminderData({
													...reminderData,
													expiresAt: date ?? new Date(),
												}),
										});
									}}
								>
									<FontAwesome5 name="calendar-alt" size={24} color="#fff" />
								</TouchableOpacity>
								<TouchableOpacity
									onPress={() => {
										DateTimePickerAndroid.open({
											value: reminderData.expiresAt,
											mode: 'time',
											is24Hour: true,
											minimumDate: new Date(),
											onChange: (event, date) =>
												setReminderData({
													...reminderData,
													expiresAt: moment(reminderData.expiresAt)
														.set('hours', moment(date).get('hours'))
														.set('minutes', moment(date).get('minutes'))
														.set('seconds', 0)
														.toDate(),
												}),
										});
									}}
								>
									<FontAwesome5 name="clock" size={24} color="#fff" />
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<View className="flex flex-col space-y-2">
						<Text className="font-bold">Notes:</Text>
						<TextInput
							className="p-2 px-4 rounded-lg bg-secondary text-white"
							placeholderTextColor="#fff"
							multiline
							numberOfLines={4}
							maxLength={40}
							style={{ textAlignVertical: 'top' }}
							onChangeText={(text) =>
								setReminderData({ ...reminderData, notes: text })
							}
							defaultValue={reminder.notes}
						/>
					</View>
					<View>
						<TouchableOpacity
							className="p-4 px-4 rounded-lg bg-primary border flex flex-row space-x-3 justify-center items-center"
							onPress={update}
						>
							<FontAwesome5 name="edit" size={16} color="#000" />
							<Text>Edit</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
}
