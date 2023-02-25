import { FontAwesome } from '@expo/vector-icons';
import { useCallback } from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import { Logo } from '../components/Logo';
import { View } from '../components/Themed';
import { VehicleSpaceList } from '../components/VehicleSpace/VehicleSpaceList';
import useColorScheme from '../hooks/useColorScheme';
import ContextCreation from '../models/ContextCreation';
import { VehicleSpace } from '../models/VehicleSpace';
import { RootTabScreenProps } from '../types';
import { styled } from 'nativewind';

export default function HandleVehicleSpaceScreen({
	navigation,
}: RootTabScreenProps<'HandleVehicleSpace'>) {
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

	const StyledView = styled(View);

	return (
		<View className="flex h-screen flex-col p-5">
			<Logo />
			<VehicleSpaceList />
			<TouchableOpacity
				className="bg-secondary p-4 rounded-full absolute bottom-12 right-6 w-35 h-34"
				onPress={() => {
					// realm.write(() => realm.delete(realm.objects(VehicleSpace)));
					navigation.navigate('VehicleAssociation');
				}}
			>
				<FontAwesome name="plus" size={20} color="white" />
			</TouchableOpacity>
		</View>
	);
}
