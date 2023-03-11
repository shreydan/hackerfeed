import { SafeAreaView, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import React from "react";
import FeedList from "../Components/FeedList";

const Feed = ({ navigation }) => {
	const theme = useTheme();

	return (
		<SafeAreaView style={[styles.container]}>
			<FeedList navigation={navigation} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		padding: 0,
	},
});

export default Feed;
