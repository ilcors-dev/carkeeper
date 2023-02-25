import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Vehicle } from '../../models/Vehicle';

interface Props {
	vehicle: Vehicle;
}

export const VehicleSpaceItem = ({ vehicle }: Props) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate('Vehicle', { _id: vehicle._id })}
		>
			<View style={styles.carListItem}>
				<FontAwesome name="car" size={60} color="#fff" />
				<View>
					<Text style={styles.carListItemText}>{vehicle.getName()}</Text>
					<Text style={styles.carListItemTextDate}>
						{vehicle.createdAt.toDateString()}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	list: {
		padding: 20,
	},
	carListItem: {
		backgroundColor: '#5371FF',
		borderRadius: 20,
		padding: 20,
		marginBottom: 20,
		flexDirection: 'row',
		alignItems: 'center',
	},
	carListItemText: {
		color: '#fff',
		fontSize: 18,
		marginLeft: 20,
	},
	carListItemTextDate: {
		color: '#fff',
		fontSize: 8,
		marginLeft: 20,
	},
});
