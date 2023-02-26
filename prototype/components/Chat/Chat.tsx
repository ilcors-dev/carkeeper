import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
	Text,
	ScrollView,
	View,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { ChatMessage } from "../../models/ChatMessage";
import { ChatMessageItem } from "./ChatMessageItem";

interface Props {
	// List of ChatMessage
	messages: ChatMessage[];
}

export const Chat = ({ messages }: Props) => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<ScrollView>
				{messages.map((message) => (
					<ChatMessageItem
						type={message.type}
						body={message.body}
					></ChatMessageItem>
				))}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 16,
		marginBottom: 16,
		marginTop: 10,
		height: "100%",
		width: "100%",
	},
});
