import { FontAwesome5 } from "@expo/vector-icons";
import React, { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Results } from "realm";
import { Chat } from "../components/Chat/Chat";
import { Logo } from "../components/Logo";
import { ChatMessage } from "../models/ChatMessage";
import ContextCreation from "../models/ContextCreation";
import { StatsTravel } from "../models/StatsTravel";
import { Vehicle } from "../models/Vehicle";
import { VehicleDataPiece } from "../models/VehicleDataPiece";
import { RootStackScreenProps } from "../types";

export default function VehicleScreen({
	route,
	navigation,
}: RootStackScreenProps<"Vehicle">) {
	const { useRealm, useObject, useQuery } = ContextCreation;
	const realm = useRealm();
	const vehicle = useObject(Vehicle, route.params._id) as Vehicle;

	const remove = useCallback(() => {
		realm.beginTransaction();
		realm.delete(vehicle);
		realm.commitTransaction();
		navigation.goBack();
	}, [realm]);

	const handleGenerateMessage = useCallback(async () => {
		console.log("Add message to vehicle chat");

		try {
			const statsTravel = StatsTravel.generate(vehicle.uuid);

			const travel = await realm.write(async () =>
				realm.create(StatsTravel, statsTravel)
			);

			const messageData = ChatMessage.generate("travel", travel.toMessage());

			const message = await realm.write(async () =>
				realm.create(ChatMessage, messageData)
			);

			await realm.write(async () => {
				vehicle.chat.push(message);
				travel.messageId = message._id;
			});
		} catch (error) {
			console.log(error);
		}
	}, [realm]);

	return (
		<View className="flex h-screen flex-col p-5 bg-primary">
			<Logo />
			<View className="flex flex-col space-y-4">
				<View className="p-4 px-6 flex flex-col items-center space-x-4 border rounded-lg">
					<View className="flex flex-row">
						<FontAwesome5 name="car" size={40} color="#000" />
						<TouchableOpacity
							className="p-2 ml-4 px-4 rounded-lg bg-secondary flex flex-row space-x-3 justify-center items-center"
							onPress={remove}
						>
							<FontAwesome5 name="trash" size={16} color="#fff" />
						</TouchableOpacity>
						<TouchableOpacity
							className="p-2 ml-4 px-4 rounded-lg bg-secondary flex flex-row space-x-3 justify-center items-center"
							onPress={
								// delete all messages
								() => {
									realm.write(() => {
										vehicle.chat.forEach((message) => {
											realm.delete(message);
										});
									});
								}
							}
						>
							<FontAwesome5 name="minus" size={16} color="#fff" />
						</TouchableOpacity>
						<TouchableOpacity
							className="p-2 ml-4 px-4 rounded-lg bg-secondary flex flex-row space-x-3 justify-center items-center"
							onPress={handleGenerateMessage}
						>
							<FontAwesome5 name="plus" size={16} color="#fff" />
						</TouchableOpacity>
					</View>
					<View className="flex flex-row">
						<Text className="mt-2 text-base font-bold">
							{vehicle.getName()}
						</Text>
					</View>
				</View>
				<View className="p-4 px-6 bg-secondary rounded-lg">
					<View className="flex flex-row justify-around">
						<View className="flex flex-col space-y-2 items-center">
							<FontAwesome5 name="gas-pump" size={32} color="#fff" />
							<Text className="text-sm font-bold text-white">26/60l</Text>
						</View>
						<View className="flex flex-col space-y-2 items-center">
							<FontAwesome5 name="check" size={32} color="#fff" />
							<Text className="text-sm font-bold text-white">All good</Text>
						</View>
						<View className="flex flex-col space-y-2 items-center">
							<FontAwesome5 name="road" size={32} color="#fff" />
							<Text className="text-sm font-bold text-white">32576 km</Text>
						</View>
					</View>
				</View>
				<View className="p-4 px-6 bg-secondary rounded-lg">
					<View className="flex flex-row justify-around">
						<Text className="text-white">scadenze</Text>
					</View>
				</View>
				<Chat messages={Array.from(vehicle.chat)}></Chat>
			</View>
		</View>
	);
}
