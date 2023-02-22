import { FontAwesome } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export const Logo = () => {
	const colorScheme = useColorScheme();

	return (
		<View className="mx-auto flex flex-col items-center">
			<FontAwesome name="car" size={35} color={Colors[colorScheme].text} />
			<Text className="text-4xl font-bold">CarKeeper</Text>
		</View>
	);
};
