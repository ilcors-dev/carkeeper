/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import VehicleSpaceScreen from "../screens/VehicleSpaceScreen";
import UserProfileScreen from "../screens/UserProfileScreen";
import {
	RootStackParamList,
	RootTabParamList,
	RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import ContextCreation from "../models/ContextCreation";
import { User } from "../models/User";
import AuthenticationScreen from "../screens/AuthenticationScreen";
import VehicleAssociationScreen from "../screens/VehicleAssociationScreen";

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
	const { useRealm } = ContextCreation;

	const realm = useRealm();

	const mock = React.useCallback(async () => {
		try {
			realm.write(() => realm.create(User, User.generate("123456")));
		} catch (error) {
			console.log(error);
		}

		console.log(realm.objects(User).map((user) => user.telephone));
	}, [realm]);

	React.useEffect(() => {
		mock();
	}, [mock]);

	return (
		<Stack.Navigator>
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
