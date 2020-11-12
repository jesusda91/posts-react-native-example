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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FormikScreen from './screens/Formik/FormikScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const PostsAppStack = createStackNavigator();

const PostsApp = () => (
	<PostsAppStack.Navigator>
		<PostsAppStack.Screen name={routes.usersRoute} component={UsersScreen} />
		<PostsAppStack.Screen name={routes.postsRoute} component={PostsScreen} />
		<PostsAppStack.Screen name={routes.detailRoute} component={DetailScreen} />
	</PostsAppStack.Navigator>
)

const FormikAppStack = createStackNavigator();

const FormikApp = () => (
	<FormikAppStack.Navigator>
		<FormikAppStack.Screen name={routes.formikRoute} component={FormikScreen} />
	</FormikAppStack.Navigator>
)

const StackNavigatorForTabs = () => (
	<Tab.Navigator>
		<Tab.Screen name="Posts app" component={PostsApp} />
		<Tab.Screen name="Formik app" component={FormikApp} />
	</Tab.Navigator>
)

const Router = ({ isLoading, isLoggedIn, setIsLoggedIn }) => {

	return (
		isLoading ? <Loading /> :
		<NavigationContainer
			initialRouteName="Home"
		>
			<Stack.Navigator headerMode="none">
				{isLoggedIn ? (
					<Stack.Screen
						name="StackNavigatorForTabs"
						component={StackNavigatorForTabs}
					/>
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