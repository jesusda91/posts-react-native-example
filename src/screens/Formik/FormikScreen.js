import React from 'react'
import { StyleSheet, View } from 'react-native';
import FormUseFormik from '../../components/FormUseFormik';
import FormWithContext from '../../components/FormWithContext';

const FormikScreen = () => {
	return (
		<View style={styles.container}>
			<FormUseFormik />
			<FormWithContext />
		</View>
	)
}

export default FormikScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
})
