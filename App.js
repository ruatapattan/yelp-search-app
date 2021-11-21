import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./src/screens/SearchScreen";
import { StyleSheet, View } from "react-native";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

//v4, not used anymore
// const navigator = createStackNavigator(
// 	{
// 		Search: SearchScreen,
// 	},
// 	{
// 		initialRouteName: "Search",
// 		defaultNavigationOptions: {
// 			title: "BusinessSearch",
// 		},
// 	}
// );

const Stack = createStackNavigator();

const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: "#fff",
	},
};

function App() {
	return (
		<NavigationContainer theme={MyTheme}>
			<Stack.Navigator initialRouteName="Search">
				<Stack.Screen name="Search" component={SearchScreen} options={{ title: "Business Search" }} />
				<Stack.Screen
					name="ResultsShow"
					component={ResultsShowScreen}
					options={({ route }) => ({
						title: route.params.name,
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

// export default NavigationContainer(navigator);

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
