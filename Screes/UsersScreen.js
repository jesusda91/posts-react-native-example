import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ListItem from '../components/ListItem'

const UsersScreen = ({ navigation }) => {
	const [loading, setLoading] = useState(true);
	const [users, setUsers] = useState(true);

	const fetchUsers = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const users = await response.json();
		setUsers(users);
		setLoading(false);
	}

	useEffect(() => {
		fetchUsers();
	}, []);

	const handlePressUser = (item) => () => {
		navigation.navigate("Posts", { userId: item.id })
	}

	return (
		<View>
			{
				loading ? <Text>Cargando...</Text> :
				<FlatList
					data={users}
					keyExtractor={item => String(item.id)}
					renderItem={({ item }) => <ListItem {...item} onPress={handlePressUser(item)} />}
				/>
			}
		</View>
	)
}

export default UsersScreen;

const styles = StyleSheet.create({});
