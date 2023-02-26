import { FontAwesome5 } from '@expo/vector-icons';
import React, { useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Results } from 'realm';
import { Logo } from '../components/Logo';
import ContextCreation from '../models/ContextCreation';
import { Vehicle } from '../models/Vehicle';
import { VehicleDataPiece } from '../models/VehicleDataPiece';
import { RootStackScreenProps } from '../types';

export default function VehicleScreen({
	route,
	navigation,
}: RootStackScreenProps<'Vehicle'>) {
	const { useRealm, useObject, useQuery } = ContextCreation;
	const realm = useRealm();
	const vehicle = useObject(Vehicle, route.params._id) as Vehicle;

	const remove = useCallback(() => {
		realm.beginTransaction();
		realm.delete(vehicle);
		realm.commitTransaction();
		navigation.goBack();
	}, [realm]);

	return (
		<View className="flex h-screen flex-col p-5 bg-primary">
			<Logo />
			<View className="flex flex-col space-y-4">
				<View className="p-4 px-6 flex flex-row items-center space-x-4 border rounded-lg">
					<FontAwesome5 name="car" size={40} color="#000" />
					<Text className="mt-2 text-base font-bold">{vehicle.getName()}</Text>
				</View>
				<View className="p-4 px-6 bg-secondary rounded-lg">
					<View className="flex flex-row justify-around">
						<View className="flex flex-col space-y-2 items-center">
							<FontAwesome5 name="gas-pump" size={32} color="#fff" />
							<Text className="text-sm font-bold text-white">26/60l</Text>
						</View>
						<View className="flex flex-col space-y-2 items-center">
							<FontAwesome5 name="check" size={32} color="#fff" />
							<Text className="text-sm font-bold text-white">All good</Text>
						</View>
						<View className="flex flex-col space-y-2 items-center">
							<FontAwesome5 name="road" size={32} color="#fff" />
							<Text className="text-sm font-bold text-white">32576 km</Text>
						</View>
					</View>
				</View>
				<View className="p-4 px-6 bg-secondary rounded-lg">
					<View className="flex flex-row justify-around">
						<Text className="text-white">scadenze</Text>
					</View>
				</View>
				<View className="p-4 px-6 bg-white rounded-lg">
					<View className="flex flex-row justify-around">
						<Text className="text-white">scadenze</Text>
					</View>
				</View>
			</View>
			<TouchableOpacity
				className="p-2 px-4 rounded-lg bg-secondary flex flex-row space-x-2 justify-center w-28 mx-auto mt-auto mb-20"
				onPress={remove}
			>
				<FontAwesome5 name="trash" size={16} color="#fff" />
				<Text className="text-white">Remove</Text>
			</TouchableOpacity>
		</View>
	);
}
