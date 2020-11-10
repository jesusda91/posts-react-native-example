import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DetailScreen = ({ route }) => {
	const { title, body } = route.params;
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.body}>{body}</Text>
		</View>
	)
}

export default DetailScreen;

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	body: {
		marginTop: 15,
	},
	title: {
		fontSize: 20,
		fontWeight: '700'
	},
});
