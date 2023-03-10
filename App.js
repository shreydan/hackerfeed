import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { MD3LightTheme, adaptNavigationTheme } from "react-native-paper";
import { useTheme } from "react-native-paper";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Feed from "./Screens/Feed";
import Post from "./Screens/Post";
import Navbar from "./Components/Navbar";

const Stack = createNativeStackNavigator();

const { LightTheme } = adaptNavigationTheme({
	reactNavigationLight: DefaultTheme,
});

function App() {
	const theme = useTheme();

	return (
		<NavigationContainer theme={LightTheme}>
			<Stack.Navigator
				initialRouteName="HackerFeed"
				screenOptions={{
					header: (props) => (
						<Navbar {...props} title={props.route.name} />
					),
				}}
			>
				<Stack.Screen name="HackerFeed" component={Feed} />
				<Stack.Screen name="Post" component={Post} />
			</Stack.Navigator>

			<StatusBar style="auto" />
		</NavigationContainer>
	);
}

export default () => (
	<PaperProvider theme={MD3LightTheme}>
		<App />
	</PaperProvider>
);
