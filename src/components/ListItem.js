import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Text from './native/Text'

const ListItem = ({ name, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.userContainer}>
				<Text style={styles.text}>{name}</Text>
			</View>
		</TouchableOpacity>
	)
}

ListItem.propTypes = {
	name: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
}

export default ListItem

const styles = StyleSheet.create({
	userContainer: {
		padding: 12,
		borderBottomColor: "#ddd",
		borderBottomWidth: 1,
		justifyContent: "center"
	},
	text: {
		fontSize: 18,
	}
})
