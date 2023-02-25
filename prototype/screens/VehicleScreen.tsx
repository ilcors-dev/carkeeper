import { FontAwesome } from '@expo/vector-icons';
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
			<Text>{vehicle.getName()}</Text>
			<TouchableOpacity
				className="p-2 px-4 rounded-lg bg-secondary flex flex-row space-x-2 justify-center w-24 mx-auto mt-auto mb-20"
				onPress={remove}
			>
				<FontAwesome name="trash" size={16} />
				<Text>Remove</Text>
			</TouchableOpacity>
		</View>
	);
}
