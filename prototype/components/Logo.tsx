import { FontAwesome } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

interface Props {
	className?: string;
}

export const Logo = ({ className }: Props) => {
	const colorScheme = useColorScheme();
	const route = useRoute();

	return (
		<View
			style={{ top: route.name === 'Authentication' ? 60 : 0 }}
			className={`mx-auto flex flex-col items-center ${className}`}
		>
			<FontAwesome name="car" size={35} color={Colors[colorScheme].text} />
			<Text className="text-4xl font-bold">CarKeeper</Text>
		</View>
	);
};
