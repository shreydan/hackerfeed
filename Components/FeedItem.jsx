import React, { useState, useEffect } from "react";
import { useTheme, Text, Card, Badge } from "react-native-paper";
import { StyleSheet } from "react-native";

const FeedItem = ({ postID }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [response, setResponse] = useState({});

	const theme = useTheme();

	const POST_URL = `https://hacker-news.firebaseio.com/v0/item/${postID}.json`;

	useEffect(() => {
		fetch(POST_URL)
			.then((res) => res.json())
			.then((result) => {
				setIsLoading(false);
				setIsError(false);
				setResponse(result);
				console.log(result);
			})
			.catch((error) => {
				setIsLoading(false);
				setIsError(true);
			});
	}, []);

	if (isError) {
		return null;
	}

	return (
		<Card
			style={[styles.card, { backgroundColor: theme.colors.background }]}
		>
			<Card.Content style={{ flexDirection: "row", marginBottom: 8 }}>
				<Badge
					style={[
						styles.badge,
						{ backgroundColor: theme.colors.primary },
					]}
					size={25}
				>
					{response.score}
				</Badge>
				<Badge
					style={[
						styles.badge,
						{ backgroundColor: theme.colors.inversePrimary },
					]}
					size={25}
				>
					{response.type}
				</Badge>
			</Card.Content>
			<Card.Title
				title={response.title}
				titleNumberOfLines={3}
				titleVariant="titleMedium"
			/>
			<Card.Content>
				{response.text && <Text>{response.text}</Text>}
				<Text>{response.url}</Text>
			</Card.Content>
		</Card>
	);
};

const styles = StyleSheet.create({
	card: {
		width: "100%",
		marginVertical: 8,
		paddingVertical: 8,
	},
	badge: {
		paddingHorizontal: 16,
		marginRight: 8,
	},
});

export default FeedItem;
