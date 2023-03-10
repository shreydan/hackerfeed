import React, { useState, useEffect } from "react";
import { useTheme, Text, Card, Badge } from "react-native-paper";
import { StyleSheet } from "react-native";

const FeedItem = ({ item }) => {
	const theme = useTheme();

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
					{item.score}
				</Badge>
				<Badge
					style={[
						styles.badge,
						{ backgroundColor: theme.colors.inversePrimary },
					]}
					size={25}
				>
					{item.type}
				</Badge>
			</Card.Content>
			<Card.Title
				title={item.title}
				titleNumberOfLines={3}
				titleVariant="titleMedium"
			/>
			<Card.Content>
				{item.text && <Text>{item.text}</Text>}
				<Text>{item.url}</Text>
			</Card.Content>
		</Card>
	);
};

const styles = StyleSheet.create({
	card: {
		marginVertical: 8,
		paddingVertical: 8,
		marginHorizontal: 8,
	},
	badge: {
		paddingHorizontal: 16,
		marginRight: 8,
	},
});

export default FeedItem;
