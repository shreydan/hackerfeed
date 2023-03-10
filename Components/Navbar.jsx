import { Appbar } from "react-native-paper";
import { useTheme } from "react-native-paper";
import { Text } from "react-native-paper";

export default function Navbar({ navigation, back, title }) {
	const theme = useTheme();
	return (
		<Appbar.Header
			mode="center-aligned"
			style={{
				backgroundColor: theme.colors.primaryContainer,
			}}
		>
			{back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
			<Appbar.Content
				title={
					<Text
						variant="titleLarge"
						style={{
							color: theme.colors.primary,
						}}
					>
						{title}
					</Text>
				}
			/>
		</Appbar.Header>
	);
}
