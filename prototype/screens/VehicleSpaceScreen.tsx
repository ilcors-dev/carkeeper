import { Text } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Logo } from '../components/Logo';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HandleVehicleSpaceScreen({
	navigation,
}: RootTabScreenProps<'HandleVehicleSpace'>) {
	return (
		<View className="flex h-screen flex-col p-5">
			<Logo />
		</View>
	);
}
