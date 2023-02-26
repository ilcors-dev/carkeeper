import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Avatar from "../Avatar";

interface Props {
	type: string;
	body: string;
}

export const ChatMessageItem = ({ type, body }: Props) => {
	// today's date in dd mmm yyyy format
	const timestamp = new Date().toLocaleDateString("it-IT");

	const title = () => {
		if (type === "travel") {
			return "Statistiche Viaggio";
		}
	};

	return (
		<View style={styles.container}>
			<Avatar></Avatar>
			<View style={styles.messageContainer}>
				<View style={styles.messageHeader}>
					<Text style={styles.messageTitle}>{title()}</Text>
					<Text style={styles.messageTimestamp}>{timestamp}</Text>
				</View>
				<Text style={styles.messageBody}>{body}</Text>
			</View>
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
