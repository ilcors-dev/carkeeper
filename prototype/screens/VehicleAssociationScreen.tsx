import { Client } from '@shaggytools/nhtsa-api-wrapper';
import React, { useCallback, useState } from 'react';
import {
	ActivityIndicator,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import ContextCreation from '../models/ContextCreation';
import { Vehicle } from '../models/Vehicle';
import { VehicleDataPiece } from '../models/VehicleDataPiece';
import { RootStackScreenProps } from '../types';

export default function VehicleAssociationScreen({
	navigation,
}: RootStackScreenProps<'VehicleAssociation'>) {
	const [obdCode, setObdCode] = useState('');
	const [error, setError] = useState('');
	const { useRealm, useQuery } = ContextCreation;
	const [isLoading, setIsLoading] = useState(false);
	const realm = useRealm();

	const handleValidation = () => {
		const isValid = obdCode.match(/^[A-Z0-9]{6}$/);

		// check if OBD code is valid
		if (!isValid) {
			setError('Invalid OBD code');
			return;
		}

		// check if OBD code already exists
		const obdCodeExists = realm
			.objects(Vehicle)
			.filtered(`uuid = "${obdCode}"`).length;
		if (obdCodeExists) {
			setError('OBD code already exists');
			return;
		}

		setError('');
		handleAssociationVehicleSpace(obdCode);
		setIsLoading(true);

		// wait 2 seconds before navigating to next screen
		setTimeout(() => {
			setIsLoading(false);
			navigation.navigate('HandleVehicleSpace');
		}, 3000);
	};

	const handleAssociationVehicleSpace = useCallback(
		async (obdCode: string) => {
			console.log('Add Vehicle Space');

			try {
				const vehicleData = await Vehicle.generateOBD(obdCode);

				const vehicle = await realm.write(async () =>
					realm.create(Vehicle, vehicleData)
				);

				console.log('Fetching vehicle data...');

				const vehicleAttributes = await Client.DecodeVin(vehicle.vin);

				console.log(
					`Fetched vehicle data! Found ${vehicleAttributes.Results.length} items! Saving to realm...`
				);

				vehicleAttributes.Results.forEach((attribute) => {
					realm.write(() => {
						const vehicleDataPiece = realm.create(
							VehicleDataPiece,
							VehicleDataPiece.generate(vehicle, attribute)
						);

						vehicle.vehicleData.push(vehicleDataPiece);
					});
				});

				console.log('Saved vehicle data to realm!');
			} catch (error) {
				console.log(error);
			}
		},
		[realm]
	);

	return (
		<View style={styles.container}>
			{isLoading ? (
				<View style={styles.loading}>
					<ActivityIndicator size="large" color="#007AFF" />
					<Text style={styles.loadingText}>vehicle data sync</Text>
				</View>
			) : null}
			{error ? <Text style={styles.error}>{error}</Text> : null}
			<Text style={styles.label}>Enter OBD code:</Text>
			<TextInput
				style={styles.input}
				autoCapitalize={'characters'}
				onChangeText={setObdCode}
				value={obdCode}
				placeholder="OBD code"
				keyboardType="number-pad"
				placeholderTextColor="#ccc"
				// OBD code is 6 characters long
				maxLength={6}
			/>
			<TouchableOpacity style={styles.button} onPress={handleValidation}>
				<Text style={styles.buttonText}>Validate</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFDE5A',
	},
	label: {
		fontSize: 20,
		marginBottom: 10,
	},
	input: {
		textAlign: 'center',
		width: '80%',
		height: 50,
		fontSize: 20,
		backgroundColor: '#fff',
		borderRadius: 10,
		paddingHorizontal: 10,
		marginBottom: 20,
	},
	button: {
		width: '80%',
		height: 60,
		backgroundColor: '#5371FF',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
	},
	error: {
		color: '#ED474A',
		fontSize: 16,
		marginBottom: 10,
	},
	loading: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	loadingText: {
		marginLeft: 20,
		fontSize: 24,
		fontWeight: 'bold',
		color: '#007AFF',
	},
	loadedText: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#007AFF',
	},
});
