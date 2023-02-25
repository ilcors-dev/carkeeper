import { FontAwesome } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
	uuid: string;
	createdAt: Date;
}

export const VehicleSpaceItem = ({ uuid, createdAt }: Props) => {
	const styles = StyleSheet.create({
		list: {
			padding: 20,
		},
		carListItem: {
			backgroundColor: "#5371FF",
			borderRadius: 20,
			padding: 20,
			marginBottom: 20,
			flexDirection: "row",
			alignItems: "center",
		},
		carListItemText: {
			color: "#fff",
			fontSize: 24,
			marginLeft: 20,
		},
		carListItemTextDate: {
			color: "#fff",
			fontSize: 18,
			marginLeft: 20,
		},
	});
	return (
		<TouchableOpacity>
			<View style={styles.carListItem}>
				<FontAwesome name="car" size={60} color="#fff" />
				<View>
					<Text style={styles.carListItemText}>{uuid}</Text>
					<Text style={styles.carListItemTextDate}>
						{createdAt.toDateString()}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};
