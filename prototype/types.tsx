/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
	CompositeScreenProps,
	NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

export type RootStackParamList = {
	Root: NavigatorScreenParams<RootTabParamList> | undefined;
	Authentication: undefined;
	VehicleAssociation: undefined;
	StatsTravel: { _id: Realm.BSON.ObjectId };
	Vehicle: { _id: Realm.BSON.ObjectId };
	VehicleAddReminder: {
		_id: Realm.BSON.ObjectId;
	};
	VehicleShowReminder: {
		_id: Realm.BSON.ObjectId;
	};
	Modal: undefined;
	NotFound: undefined;
	HandleVehicleSpace: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
	NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
	HandleVehicleSpace: undefined;
	HandleUserProfile: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
	CompositeScreenProps<
		BottomTabScreenProps<RootTabParamList, Screen>,
		NativeStackScreenProps<RootStackParamList>
	>;
