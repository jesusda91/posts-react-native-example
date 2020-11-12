import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import LoginScreen from './screens/Auth/LoginScreen';
import RegisterScreen from './screens/Auth/RegisterScreen';
import DetailScreen from './screens/DetailScreen';
import PostsScreen from './screens/PostsScreen';
import UsersScreen from './screens/UsersScreen';
import * as routes from './constants/routes';
import { getData } from './helpers/common-functions';
import Loading from './components/utils/Loading';

const Stack = createStackNavigator();

const Router = ({ isLoading, isLoggedIn, setIsLoggedIn }) => {

	return (
		isLoading ? <Loading /> :
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
	)
}

export default Router;
