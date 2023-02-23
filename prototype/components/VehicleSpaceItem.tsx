import { Text, View } from 'react-native';

interface Props {
	id: string;
	createdAt: Date;
}

export const VehicleSpaceItem = ({ id, createdAt }: Props) => {
	return (
		<View>
			<Text>{id}</Text>
			<Text>{createdAt.toISOString()}</Text>
		</View>
	);
};
