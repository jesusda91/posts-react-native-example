import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

const Loading = () => {
	return (
		<View style={styles.loading}>
			<ActivityIndicator />
		</View>
	)
}

export default Loading;

const styles = StyleSheet.create({
	loading: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
});
