import React from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { loginRoute } from '../../constants/routes'
import useForm from '../../hooks/useForm'

const RegisterScreen = ({ navigation }) => {

	const initialState = {
		username: "",
		password: "",
		passwordConfirmation: "",
	}

	const onSubmit =  values => {
		console.log("onSubmit");
		fetch("https://run.mocky.io/v3/5bef5413-7edc-42a1-9f29-140421947b9d", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values)
		}).then(x => {
			if (x.status === 201) {
				return Alert.alert("Exito", "Usuario creado con exito", [
					{
						text: "Ir al inicio",
						onPress: () => navigation.navigate(loginRoute)
					}
				])
			}
		})
	}

	const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit);

	return (
		<View style={styles.container}>
			<TextInput
				autoCapitalize="none"
				style={styles.textInput}
				placeholder="Username"
				value={inputs.username}
				onChangeText={subscribe("username")}
			/>
			<TextInput
				style={styles.textInput}
				autoCapitalize="none"
				placeholder="Password"
				value={inputs.password}
				onChangeText={subscribe("password")}
				secureTextEntry={true}
			/>
			<TextInput
				style={styles.textInput}
				autoCapitalize="none"
				placeholder="Confirm password"
				value={inputs.passwordConfirmation}
				onChangeText={subscribe("passwordConfirmation")}
				secureTextEntry={true}
			/>
			<Button
				onPress={handleSubmit}
				title="Sign up"
			/>
			<Button
				onPress={() => navigation.navigate(loginRoute)}
				title="Go back"
			/>
		</View>
	)
}

export default RegisterScreen

const styles = StyleSheet.create({
	container: {
		padding: 15,
		justifyContent: "center",
		flex: 1
	},
	textInput: {
		borderBottomColor: "#ddd",
		borderBottomWidth: 1,
		paddingVertical: 12,
		marginVertical: 5
	}
})
