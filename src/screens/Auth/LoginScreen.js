import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { registerRoute } from '../../constants/routes'
import { storeData } from '../../helpers/common-functions'
import useForm from '../../hooks/useForm'

const LoginScreen = ({ navigation, setIsLoggedIn }) => {

	const initialState = {
		username: "",
		password: "",
	}

	const onSubmit = values => {
		console.log("onSubmit");
		fetch("https://run.mocky.io/v3/140b791c-e544-404e-ae0f-361a42396b22", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values)
		}).then(x => x.json()).then(async user => {
			if (user && user.token) {
				await storeData("token", user.token);
				setIsLoggedIn(true);
			}
		})
	}

	const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit);

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.textInput}
				placeholder="Username"
				value={inputs.username}
				onChangeText={subscribe("username")}
				autoCapitalize="none"
			/>
			<TextInput
				style={styles.textInput}
				placeholder="Password"
				value={inputs.password}
				onChangeText={subscribe("password")}
				secureTextEntry={true}
				autoCapitalize="none"
			/>
			<Button
				onPress={handleSubmit}
				title="Sign in"
			/>
			<Button
				onPress={() => navigation.navigate(registerRoute)}
				title="Sign up"
			/>
		</View>
	)
}

export default LoginScreen

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
});