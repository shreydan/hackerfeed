import React, { useState, useEffect } from "react";
import { ActivityIndicator, Text, useTheme } from "react-native-paper";
import { FlatList, View } from "react-native";
import FeedItem from "./FeedItem";

const getItemURL = (id) => {
	return `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
};

const FeedList = ({ navigation }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [response, setResponse] = useState([]);
	const [limit, setLimit] = useState(25);

	const theme = useTheme();

	async function getData() {
		const ids = await (
			await fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
		).json();

		const data = Promise.all(
			ids
				.slice(0, limit)
				.map(
					async (i) =>
						await (
							await fetch(
								`https://hacker-news.firebaseio.com/v0/item/${i}.json`
							)
						).json()
				)
		);
		return data;
	}

	useEffect(() => {
		getData()
			.then((data) => {
				setIsLoading(false);
				setIsError(false);
				setResponse(data);
			})
			.catch((error) => {
				setIsError(true);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return (
			<View
				style={{
					flex: 1,
					height: "100%",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<ActivityIndicator
					animating={isLoading}
					style={{
						alignSelf: "center",
					}}
				/>
			</View>
		);
	}
	if (isError) {
		return (
			<View
				style={{
					flex: 1,
					height: "100%",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Text style={{ color: theme.colors.error }}>
					an error has occurred unfortunately :(
				</Text>
			</View>
		);
	}

	const renderItem = ({ item }) => {
		return <FeedItem item={item} navigation={navigation} />;
	};

	return (
		<FlatList
			data={response}
			renderItem={renderItem}
			keyExtractor={(item) => item.id}
			style={{ width: "100%" }}
		/>
	);
};

export default FeedList;
