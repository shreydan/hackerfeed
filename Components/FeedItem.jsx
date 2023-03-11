import React from "react";
import { useTheme, Text, Card, Badge } from "react-native-paper";
import { StyleSheet, Linking } from "react-native";
import { feedURL } from "../utils/urlparser";

const FeedItem = ({ navigation, item }) => {
	const theme = useTheme();

	const navtoPost = () => {
		if (item.text) {
			navigation.navigate("Post", { item: item });
		} else {
			if (item.url) {
				Linking.openURL(item.url);
			}
		}
	};

	return (
		<Card
			onPress={navtoPost}
			style={[styles.card, { backgroundColor: theme.colors.background }]}
		>
			<Card.Content
				style={{
					flexDirection: "row",
					marginBottom: 8,
					flexWrap: "wrap",
				}}
			>
				<Badge
					style={[
						styles.badge,
						{ backgroundColor: theme.colors.secondary },
					]}
					size={25}
				>
					{item.score}
				</Badge>
				{item.url && (
					<Badge
						style={[
							styles.badge,
							{
								alignSelf: "flex-start",
								backgroundColor: theme.colors.primary,
							},
						]}
						size={25}
					>
						{feedURL(item.url).domain}
					</Badge>
				)}
				<Badge
					style={[
						styles.badge,
						{ backgroundColor: theme.colors.secondary },
					]}
					size={25}
				>
					{item.type}
				</Badge>
				<Badge
					style={[
						styles.badge,
						{ backgroundColor: theme.colors.inversePrimary },
					]}
					size={25}
				>
					{`${item.kids ? item.kids.length : 0} comments`}
				</Badge>
			</Card.Content>
			<Card.Title
				title={item.title}
				titleNumberOfLines={3}
				titleVariant="titleMedium"
			/>
			{item.text && (
				<Card.Content>
					<Text>
						{item.text
							.replace(/<\/?[^>]+(>|$)/g, "")
							.replaceAll("&#x2F;", "/")
							.slice(0, 100)
							.trim() + "..."}
					</Text>
					<Text
						style={{ color: theme.colors.primary }}
						variant="titleSmall"
					>
						read more
					</Text>
				</Card.Content>
			)}
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
		paddingHorizontal: 8,
		marginRight: 8,
		marginBottom: 8,
	},
	domain: {
		paddingHorizontal: 16,
		alignSelf: "flex-start",
		marginHorizontal: 16,
	},
});

export default FeedItem;
