import { FontAwesome } from '@expo/vector-icons';
import { styled } from 'nativewind';
import { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { Logo } from '../components/Logo';
import { View } from '../components/Themed';
import { VehicleSpaceList } from '../components/VehicleSpace/VehicleSpaceList';
import ContextCreation from '../models/ContextCreation';
import { Vehicle } from '../models/Vehicle';
import { RootTabScreenProps } from '../types';

export default function HandleVehicleSpaceScreen({
	navigation,
}: RootTabScreenProps<'HandleVehicleSpace'>) {
	const { useRealm } = ContextCreation;
	const realm = useRealm();

	return (
		<View className="flex h-screen flex-col p-5">
			<Logo />
			<VehicleSpaceList />
			<TouchableOpacity
				className="bg-secondary p-4 rounded-full absolute bottom-16 right-6 w-35 h-34"
				onPress={() => {
					// realm.write(() => realm.delete(realm.objects(Vehicle)));
					navigation.navigate('VehicleAssociation');
				}}
			>
				<FontAwesome name="plus" size={20} color="white" />
			</TouchableOpacity>
		</View>
	);
}
