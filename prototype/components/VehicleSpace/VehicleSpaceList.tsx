import { FlatList, Text, View } from "react-native";
import { Results } from "realm";
import ContextCreation from "../../models/ContextCreation";
import { VehicleSpace } from "../../models/VehicleSpace";
import { VehicleSpaceItem } from "../VehicleSpace/VehicleSpaceItem";

export const VehicleSpaceList = () => {
	const { useQuery } = ContextCreation;
	const spaces = useQuery<VehicleSpace>(VehicleSpace) as Results<VehicleSpace>;

	return (
		<View>
			<FlatList
				data={spaces}
				keyExtractor={(space) => space._id.toString()}
				renderItem={({ item }) => (
					<VehicleSpaceItem uuid={item.uuid} createdAt={item.createdAt} />
				)}
			/>
		</View>
	);
};
