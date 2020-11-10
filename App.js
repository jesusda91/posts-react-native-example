import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import DetailScreen from './src/screens/DetailScreen';
import PostsScreen from './src/screens/PostsScreen';
import UsersScreen from './src/screens/UsersScreen';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer
			initialRouteName="Home"
		>
			<Stack.Navigator>
				<Stack.Screen name="Users" component={UsersScreen} />
				<Stack.Screen name="Posts" component={PostsScreen} />
				<Stack.Screen name="Detail" component={DetailScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
