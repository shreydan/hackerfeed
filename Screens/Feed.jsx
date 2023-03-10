import { SafeAreaView, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import React from "react";
import FeedList from "../Components/FeedList";
import FeedItem from "../Components/FeedItem";

const Feed = () => {
	const theme = useTheme();

	return (
		<SafeAreaView style={[styles.container]}>
			<FeedList />
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
