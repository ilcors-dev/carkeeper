import React from "react";
import { Results } from "realm";
import { View, StyleSheet, Text } from "react-native";
import { ChatMessage } from "../models/ChatMessage";
import ContextCreation from "../models/ContextCreation";
import { Duration } from "ts-duration";

import { RootStackScreenProps } from "../types";
import { StatsTravel } from "../models/StatsTravel";

export default function StatsTravelScreen({
	route,
}: RootStackScreenProps<"StatsTravel">) {
	const { useRealm, useObject } = ContextCreation;
	const realm = useRealm();

	// get the travel data from the message
	const travels = realm
		.objects(StatsTravel)
		.filtered("messageId = $0", route.params._id) as Results<StatsTravel>;

	const travel = travels[0];

	// const travel = travels[0];
	return (
		<View style={styles.container}>
			{/* <Image source={{ uri: mapImage }} style={styles.mapImage} /> */}

			<View style={styles.infoContainer}>
				<View style={styles.infoRow}>
					<Text style={styles.infoLabel}>Inizio:</Text>
					<Text style={styles.infoValue}>
						{travel.inizio.toLocaleDateString("it-IT")}
					</Text>
				</View>

				<View style={styles.infoRow}>
					<Text style={styles.infoLabel}>Fine:</Text>
					<Text style={styles.infoValue}>
						{travel.fine.toLocaleDateString("it-IT")}
					</Text>
				</View>

				<View style={styles.infoRow}>
					<Text style={styles.infoLabel}>Durata:</Text>
					<Text style={styles.infoValue}>
						{Duration.hour(
							travel.fine.getDate() - travel.inizio.getDate()
						).toString()}
					</Text>
				</View>

				<View style={styles.infoRow}>
					<Text style={styles.infoLabel}>Km inizio:</Text>
					<Text style={styles.infoValue}>{travel.km_inizio}</Text>
				</View>

				<View style={styles.infoRow}>
					<Text style={styles.infoLabel}>Km fine:</Text>
					<Text style={styles.infoValue}>{travel.km_fine}</Text>
				</View>

				<View style={styles.infoRow}>
					<Text style={styles.infoLabel}>Km percorsi:</Text>
					<Text style={styles.infoValue}>{travel.km_percorsi}</Text>
				</View>

				<View style={styles.infoRow}>
					<Text style={styles.infoLabel}>Carburante inizio:</Text>
					<Text style={styles.infoValue}>{travel.carburante_inizio}</Text>
				</View>

				<View style={styles.infoRow}>
					<Text style={styles.infoLabel}>Carburante fine:</Text>
					<Text style={styles.infoValue}>{travel.carburante_fine}</Text>
				</View>

				<View style={styles.infoRow}>
					<Text style={styles.infoLabel}>Carburante usato:</Text>
					<Text style={styles.infoValue}>{travel.carburante_usato}</Text>
				</View>

				<View style={styles.infoRow}>
					<Text style={styles.infoLabel}>Consumo medio:</Text>
					<Text style={styles.infoValue}>{travel.consumo_medio}</Text>
				</View>

				<View style={styles.infoRow}>
					<Text style={styles.infoLabel}>Velocità media:</Text>
					<Text style={styles.infoValue}>{travel.velocita_media}</Text>
				</View>

				<View style={styles.infoRow}>
					<Text style={styles.infoLabel}>Velocità massima:</Text>
					<Text style={styles.infoValue}>{travel.velocita_massima}</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFDE5A",
	},
	mapImage: {
		width: "100%",
		height: 200,
	},
	infoContainer: {
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	infoRow: {
		flexDirection: "row",
		marginBottom: 10,
	},
	infoLabel: {
		flex: 1,
		fontWeight: "bold",
	},
	infoValue: {
		flex: 1,
		textAlign: "right",
	},
});
