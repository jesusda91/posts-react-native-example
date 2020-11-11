import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import LoginScreen from './src/screens/Auth/LoginScreen';
import RegisterScreen from './src/screens/Auth/RegisterScreen';
import DetailScreen from './src/screens/DetailScreen';
import PostsScreen from './src/screens/PostsScreen';
import UsersScreen from './src/screens/UsersScreen';
import * as routes from './src/constants/routes';
import { getData } from './src/helpers/common-functions';

const Stack = createStackNavigator();

const App = () => {

	const [isLoading, setIsLoading] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState();

	useEffect(()=>{
		const getToken = async () => {
			const token = await getData("token");
			if (token) {
				setIsLoggedIn(true);
			}
			setIsLoading(false);
		}
		getToken();
	}, [])

	return (

		isLoading ? <View style={styles.loading}><ActivityIndicator /></View> :
		<NavigationContainer
			initialRouteName="Home"
		>
			<Stack.Navigator>
				{isLoggedIn ? (
					<>
						<Stack.Screen name={routes.usersRoute} component={UsersScreen} />
						<Stack.Screen name={routes.postsRoute} component={PostsScreen} />
						<Stack.Screen name={routes.detailRoute} component={DetailScreen} />
					</>
				) : (
					<>
						<Stack.Screen name={routes.loginRoute}>
							{props => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
						</Stack.Screen>
						<Stack.Screen name={routes.registerRoute} component={RegisterScreen} />
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>

	);
}

export default App;

const styles = StyleSheet.create({
	loading: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
});
