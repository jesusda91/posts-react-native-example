import { useFormik } from 'formik';
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { emailRegex } from '../constants/regex';


const validate = values => {
	const errors = {};

	if (!values.email) {
		errors.email = 'Required'
	} else if (!emailRegex.test(values.email)) {
		errors.email = "Invalid email"
	}

	return errors;
}

const FormUseFormik = () => {
	const formik = useFormik({
		initialValues: {
			email: ''
		},
		validate,
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	})
	return (
		<View style={styles.container}>
			<Text>Email</Text>
			<TextInput
				onBlur={formik.handleBlur("email")}
				style={styles.textInput}
				onChangeText={formik.handleChange("email")}
				value={formik.values.email}
			/>
			{
				formik.errors.email && formik.touched.emailsadasd ? <Text>{formik.errors.email}</Text> : null
			}
			<Button title="submit" onPress={formik.handleSubmit} />
		</View>
	)
}

export default FormUseFormik

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 30,
	},
	textInput: {
		borderBottomColor: "#aaa",
		borderBottomWidth: 1,
		paddingVertical: 2,
		marginVertical: 10,
		minWidth: 200
	}
})
