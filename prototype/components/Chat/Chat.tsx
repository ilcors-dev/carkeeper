import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
	Text,
	ScrollView,
	View,
	StyleSheet,
	TouchableOpacity,
	FlatList,
} from 'react-native';
import { ChatMessage } from '../../models/ChatMessage';
import { ChatMessageItem } from './ChatMessageItem';

interface Props {
	// List of ChatMessage
	messages: ChatMessage[];
}

export const Chat = ({ messages }: Props) => {
	const navigation = useNavigation();

	return (
		<View className="overflow-auto h-[50vh] mt-4">
			<FlatList
				data={messages}
				keyExtractor={(message) => message._id.toString()}
				renderItem={({ item }) => <ChatMessageItem message={item} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 16,
		marginBottom: 16,
		marginTop: 10,
		height: '100%',
		width: '100%',
	},
});
