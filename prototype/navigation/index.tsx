/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	DarkTheme,
	DefaultTheme,
	NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import AuthenticationScreen from "../screens/AuthenticationScreen";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import StatsTravelScreen from "../screens/StatsTravelScreen";
import UserProfileScreen from "../screens/UserProfileScreen";
import VehicleAssociationScreen from "../screens/VehicleAssociationScreen";
import VehicleScreen from "../screens/VehicleScreen";
import VehicleSpaceScreen from "../screens/VehicleSpaceScreen";
import {
	RootStackParamList,
	RootTabParamList,
	RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
	colorScheme,
}: {
	colorScheme: ColorSchemeName;
}) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
		>
			<RootNavigator />
		</NavigationContainer>
	);
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		<Stack.Navigator initialRouteName="Authentication">
			<Stack.Screen
				name="Root"
				component={BottomTabNavigator}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Authentication"
				component={AuthenticationScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="VehicleAssociation"
				component={VehicleAssociationScreen}
				options={{ title: "Vehicle Association" }}
			/>
			<Stack.Screen
				name="Vehicle"
				component={VehicleScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="StatsTravel"
				component={StatsTravelScreen}
				options={{ title: "Stats Travel" }}
			/>
			<Stack.Screen
				name="NotFound"
				component={NotFoundScreen}
				options={{ title: "Oops!" }}
			/>
			<Stack.Group screenOptions={{ presentation: "modal" }}>
				<Stack.Screen name="Modal" component={ModalScreen} />
			</Stack.Group>
		</Stack.Navigator>
	);
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName="HandleVehicleSpace"
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme].tint,
			}}
		>
			<BottomTab.Screen
				name="HandleVehicleSpace"
				component={VehicleSpaceScreen}
				options={({
					navigation,
				}: RootTabScreenProps<"HandleVehicleSpace">) => ({
					title: "HandleVehicleSpace",
					tabBarShowLabel: false,
					tabBarIcon: ({ color }) => <TabBarIcon name="car" color={color} />,
					headerShown: false,
				})}
			/>
			<BottomTab.Screen
				name="HandleUserProfile"
				component={UserProfileScreen}
				options={{
					title: "Profilo",
					tabBarShowLabel: false,
					tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
					headerShown: false,
				}}
			/>
		</BottomTab.Navigator>
	);
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
