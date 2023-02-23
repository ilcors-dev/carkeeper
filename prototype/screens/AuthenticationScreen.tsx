import { FontAwesome } from '@expo/vector-icons';
import { useCallback } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Logo } from '../components/Logo';
import { View } from '../components/Themed';
import { VehicleSpaceList } from '../components/VehicleSpace/VehicleSpaceList';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ContextCreation from '../models/ContextCreation';
import { VehicleSpace } from '../models/VehicleSpace';
import { RootStackScreenProps, RootTabScreenProps } from '../types';

export default function AuthenticationScreen({
	navigation,
}: RootStackScreenProps<'Authentication'>) {
	return (
		<View className="flex h-screen flex-col p-5">
			<Logo />
			<Text>miao</Text>
		</View>
	);
}
