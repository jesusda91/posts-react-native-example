import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DetailScreen from './Screes/DetailScreen';
import PostsScreen from './Screes/PostsScreen';
import UsersScreen from './Screes/UsersScreen';

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
