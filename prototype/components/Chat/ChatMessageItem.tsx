import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ChatMessage } from "../../models/ChatMessage";
import Avatar from "../Avatar";

interface Props {
	message: ChatMessage;
}

export const ChatMessageItem = ({ message }: Props) => {
	const navigation = useNavigation();

	const title = () => {
		if (message.type === "travel") {
			return "Statistiche del viaggio";
		}
		return message.senderUuid;
	};

	return (
		<View style={styles.container}>
			<Avatar></Avatar>
			<TouchableOpacity
				style={styles.messageContainer}
				onPress={() => {
					navigation.navigate("StatsTravel", { _id: message._id });
				}}
			>
				<View style={styles.messageContainer}>
					<View style={styles.messageHeader}>
						<Text style={styles.messageTitle}>{title()}</Text>
						<Text style={styles.messageTimestamp}>
							{message.createdAt.toLocaleDateString("it-IT")}
						</Text>
					</View>
					<Text style={styles.messageBody}>{message.body}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginVertical: 8,
	},
	avatarContainer: {
		width: 48,
		height: 48,
		borderRadius: 24,
		overflow: "hidden",
		marginHorizontal: 8,
	},
	avatar: {
		flex: 1,
	},
	messageContainer: {
		flex: 1,
		backgroundColor: "#f6f8fa",
		borderRadius: 8,
		marginHorizontal: 8,
		padding: 12,
	},
	messageHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 8,
	},
	messageTitle: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#0366d6",
		flex: 1,
		marginRight: 8,
	},
	messageTimestamp: {
		fontSize: 12,
		color: "#586069",
	},
	messageBody: {
		fontSize: 14,
		color: "#24292e",
	},
});
