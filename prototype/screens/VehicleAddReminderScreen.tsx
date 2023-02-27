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

export default function VehicleAddReminderScreen({
	route,
	navigation,
}: RootStackScreenProps<'VehicleAddReminder'>) {
	const { useRealm, useObject } = ContextCreation;
	const realm = useRealm();
	const vehicle = useObject(Vehicle, route.params._id) as Vehicle;
	const [reminderData, setReminderData] = useState({
		expiresAt: moment().add(1, 'week').toDate(),
		category: '',
		notes: '',
	});
	const [error, setError] = useState('');

	const add = () => {
		const alreadyExists = vehicle.reminders.find(
			(reminder) => reminder.category === reminderData.category
		);

		if (!reminderData.category || !reminderData.expiresAt) {
			setError('Please fill all fields');
			return;
		}

		if (alreadyExists) {
			setError(
				`Reminder of type ${reminderData.category.toUpperCase()} already exists`
			);
			return;
		}

		setError('');
		realm.write(() => {
			const reminder = realm.create(
				VehicleReminder,
				VehicleReminder.generate(
					reminderData.category as VehicleReminderCategory,
					reminderData.expiresAt,
					reminderData.notes,
					vehicle
				)
			);

			vehicle.reminders.push(reminder);
		});

		navigation.goBack();
	};

	return (
		<View className="flex h-screen flex-col p-5 bg-primary">
			<View className="flex flex-col space-y-4">
				<View className="p-4 px-6 flex flex-row items-center space-x-4 border rounded-lg mt-4">
					<FontAwesome5 name="car" size={40} color="#000" />
					<Text className="mt-2 text-base font-bold">{vehicle.getName()}</Text>
				</View>
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
						/>
					</View>
					{error && (
						<View className="flex flex-row justify-center items-center space-x-2">
							<FontAwesome5
								name="exclamation-triangle"
								size={16}
								color="#F87171"
							/>
							<Text className="text-red-400">{error}</Text>
						</View>
					)}
					<View>
						<TouchableOpacity
							className="p-4 px-4 rounded-lg bg-primary border flex flex-row space-x-3 justify-center items-center"
							onPress={add}
						>
							<FontAwesome5 name="plus" size={16} color="#000" />
							<Text>Add reminder</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
}
