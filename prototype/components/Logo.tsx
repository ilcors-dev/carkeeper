import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export const Logo = () => {
	const colorScheme = useColorScheme();

	return (
		<div className="mx-auto flex flex-col items-center">
			<FontAwesome name="car" size={35} color={Colors[colorScheme].text} />
			<p className="text-4xl font-bold">CarKeeper</p>
		</div>
	);
};
