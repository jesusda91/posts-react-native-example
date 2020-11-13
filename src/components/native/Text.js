import React from 'react'
import { StyleSheet, Text as NativeText } from 'react-native'

const Text = ({ children, style, ...props }) => {
	return (
		<NativeText {...props} style={[styles.textFont, style]}>
			{children}
		</NativeText>
	)
}

export default Text

const styles = StyleSheet.create({
	textFont: {
		fontFamily: "Poppins",
	}
})
