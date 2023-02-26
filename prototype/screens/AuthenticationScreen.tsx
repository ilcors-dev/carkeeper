import { FontAwesome } from '@expo/vector-icons';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import { Logo } from '../components/Logo';
import { View } from '../components/Themed';
import { AuthContext, AuthStateContext } from '../context/AuthContext';
import ContextCreation from '../models/ContextCreation';
import { User } from '../models/User';
import { RootStackScreenProps } from '../types';

export default function AuthenticationScreen({
	navigation,
}: RootStackScreenProps<'Authentication'>) {
	const { useRealm } = ContextCreation;
	const { loginError, isLoggedIn, login } = useContext(
		AuthContext
	) as AuthStateContext;

	const [credentials, setCredentials] = useState({
		telephone: '+391234567890',
		pin: '123456',
	});

	useEffect(() => {
		if (isLoggedIn) {
			navigation.navigate('Root');
		}
	}, [loginError, isLoggedIn]);

	const realm = useRealm();

	const signIn = () => {
		const ok = login(credentials.telephone, credentials.pin);

		if (ok) {
			console.log('Login success');
			navigation.navigate('Root');
			return;
		}

		console.log('Login failed');
	};

	const mock = useCallback(async () => {
		const u = realm.objects(User).filtered('telephone = "+391234567890"');

		if (u.length > 0) {
			console.log('Base user already exists, skipping..');
			return;
		}

		try {
			realm.write(() =>
				realm.create(User, User.generate('123456', '+391234567890'))
			);
		} catch (error) {
			console.log(error);
		}

		console.log('Base user created! pin: 123456, telephone: +391234567890');
	}, [realm]);

	useEffect(() => {
		mock();
	}, [mock]);

	return (
		<View className="flex h-screen flex-col p-5">
			<Logo />
			<View className="grid grid-cols-1 gap-y-5 my-auto">
				<View className="flex flex-col space-y-2">
					<Text className="font-bold">Telephone Number:</Text>
					<TextInput
						className="p-2 px-4 rounded-lg bg-secondary text-white"
						placeholderTextColor="#fff"
						placeholder="Telephone"
						defaultValue="+391234567890"
						keyboardType="phone-pad"
						maxLength={13}
						onChangeText={(text) =>
							setCredentials({ ...credentials, telephone: text })
						}
					/>
				</View>
				<View className="flex flex-col space-y-2">
					<Text className="font-bold">Pin:</Text>
					<TextInput
						className="p-2 px-4 rounded-lg bg-secondary text-white"
						placeholderTextColor="#fff"
						placeholder="Pin"
						secureTextEntry={true}
						maxLength={6}
						keyboardType="number-pad"
						defaultValue="123456"
						onChangeText={(text) =>
							setCredentials({ ...credentials, pin: text })
						}
					/>
				</View>
				{loginError && (
					<Text className="text-red-400">
						Credentials error: try with +391234567890 e 123456
					</Text>
				)}
				<TouchableOpacity
					className="p-2 px-4 rounded-lg bg-primary flex flex-row space-x-2 justify-center border"
					onPress={signIn}
				>
					<FontAwesome name="sign-in" size={20} />
					<Text className="text-center">Login</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
