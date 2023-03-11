import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	View,
	useWindowDimensions,
} from "react-native";
import React, { useEffect } from "react";
import {
	Text,
	Surface,
	Badge,
	useTheme,
	Button,
	Divider,
} from "react-native-paper";
import { feedURL } from "../utils/urlparser";
import RenderHTML from "react-native-render-html";

const Post = ({ route }) => {
	const theme = useTheme();

	const { item } = route.params;

	return (
		<SafeAreaView style={[styles.container]}>
			<ScrollView style={{ width: "100%" }}>
				<Surface style={[styles.surface]} elevation={0}>
					<View style={styles.badgeContainer}>
						<Badge
							style={[
								styles.badge,
								{ backgroundColor: theme.colors.primary },
							]}
							size={30}
						>
							{item.score}
						</Badge>
						<Badge
							style={[
								styles.badge,
								{ backgroundColor: theme.colors.secondary },
							]}
							size={30}
						>
							{item.type}
						</Badge>
						<Badge
							style={[
								styles.badge,
								{
									backgroundColor:
										theme.colors.inversePrimary,
								},
							]}
							size={30}
						>
							{`${item.kids ? item.kids.length : 0} comments`}
						</Badge>
					</View>
					<Text variant="titleLarge">{item.title}</Text>
					{item.url && (
						<Button
							onPress={() => {
								console.log("pressed");
							}}
							style={[styles.url]}
							mode="contained"
							icon="link"
							accessibilityHint="click to open the webpage for the post"
						>
							{feedURL(item.url).domain}
						</Button>
					)}
					{item.text && (
						<View style={{ marginVertical: 32 }}>
							<RenderHTML
								source={{ html: item.text }}
								contentWidth={useWindowDimensions().width}
								baseStyle={{ fontSize: 16 }}
							/>
						</View>
					)}
				</Surface>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "flex-start",
		justifyContent: "flex-start",
	},
	surface: {
		flex: 1,
		marginTop: 8,
		paddingHorizontal: 16,
		paddingVertical: 8,
	},
	badgeContainer: {
		flexDirection: "row",
		marginBottom: 16,
		marginTop: 8,
	},
	badge: {
		paddingHorizontal: 16,
		marginRight: 8,
	},
	url: {
		marginTop: 16,
		flex: 1,
		width: "100%",
	},
});

export default Post;
