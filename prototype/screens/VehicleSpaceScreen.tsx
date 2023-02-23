import { FontAwesome } from '@expo/vector-icons';
import { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { Logo } from '../components/Logo';
import { View } from '../components/Themed';
import { VehicleSpaceList } from '../components/VehicleSpaceList';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ContextCreation from '../models/ContextCreation';
import { VehicleSpace } from '../models/VehicleSpace';
import { RootTabScreenProps } from '../types';

export default function HandleVehicleSpaceScreen({
	navigation,
}: RootTabScreenProps<'HandleVehicleSpace'>) {
	const colorScheme = useColorScheme();
	const { useRealm } = ContextCreation;
	const realm = useRealm();

	const handleAddVehicleSpace = useCallback(async () => {
		console.log('Add Vehicle Space');

		try {
			realm.write(() => realm.create(VehicleSpace, VehicleSpace.generate()));
		} catch (error) {
			console.log(error);
		}
	}, [realm]);

	return (
		<View className="flex h-screen flex-col p-5">
			<Logo />
			<TouchableOpacity
				className="p-4 bg-secondary rounded-full"
				onPress={handleAddVehicleSpace}
			>
				<FontAwesome name="plus" size={35} color={Colors[colorScheme].text} />
			</TouchableOpacity>
			<VehicleSpaceList />
		</View>
	);
}
