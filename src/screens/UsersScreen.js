import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ListItem from '../components/ListItem'
import useFetch from '../hooks/useFetch';

const UsersScreen = ({ navigation }) => {

	const { loading, data: users, error } = useFetch('https://jsonplaceholder.typicode.com/users');

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
