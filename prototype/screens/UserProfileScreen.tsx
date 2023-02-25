import { FontAwesome } from '@expo/vector-icons';
import { useCallback, useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Logo } from '../components/Logo';
import { View } from '../components/Themed';
import { AuthContext, AuthStateContext } from '../context/AuthContext';
import ContextCreation from '../models/ContextCreation';
import { RootTabScreenProps } from '../types';

export default function HandleUserProfile({
	navigation,
}: RootTabScreenProps<'HandleUserProfile'>) {
	const { logout } = useContext(AuthContext) as AuthStateContext;
	const { useRealm } = ContextCreation;
	const realm = useRealm();

	const handleLogout = () => {
		logout();

		console.log('Logout successful');

		navigation.navigate('Authentication');
	};

	return (
		<View className="flex h-screen flex-col p-5">
			<Logo />
			<TouchableOpacity
				className="p-2 px-4 rounded-lg bg-primary my-auto flex flex-row space-x-2 w-30 mx-auto"
				onPress={handleLogout}
			>
				<FontAwesome name="sign-out" size={20} color="white" />
				<Text className="text-center text-white">Logout</Text>
			</TouchableOpacity>
		</View>
	);
}
