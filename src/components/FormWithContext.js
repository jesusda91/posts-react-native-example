import { Formik, useField, useFormikContext } from 'formik';
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import * as Yup from 'yup';

const FormInput = ({ fieldName, ...props }) => {
	const [field, meta] = useField(fieldName);
	return (
		<>
		<TextInput
			style={styles.textInput}
			onChangeText={field.onChange(fieldName)}
			onBlur={field.onBlur(fieldName)}
			value={field.value}
			{...props}
		/>
		{
			meta.error && meta.touched && (
				<Text style={styles.error}>
					{meta.error}
				</Text>
			)
		}
		</>
	)
}

const Form = () => {
	const { submitForm } = useFormikContext();
	return (
		<>
			<Text>Email</Text>
			<FormInput fieldName="email" />
			<FormInput fieldName="name" />
			<Button title="submit" onPress={submitForm} />
		</>
	)
}

const FormWithContext = () => {
	return (
		<View>
			<Formik
				onSubmit={values=>alert(JSON.stringify(values, null, 2))}
				validationSchema={
					Yup.object({
						email: Yup.string().email("Invalid email").required("Is required"),
						name: Yup.string().required("Is required")
					})
				}
				initialValues={{
					email: '',
					name: ''
				}}
			>
				<Form/>
			</Formik>
		</View>
	)
}

export default FormWithContext

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	textInput: {
		borderBottomColor: "#aaa",
		borderBottomWidth: 1,
		paddingVertical: 2,
		marginVertical: 10,
		minWidth: 200
	},
	error: {
		color: "red"
	}
})
