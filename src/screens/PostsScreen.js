import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ListItem from '../components/ListItem'
import useFetch from '../hooks/useFetch';

const PostsScreen = ({ route, navigation }) => {
	const { userId } = route.params;

	const { loading, data: posts } = useFetch('https://jsonplaceholder.typicode.com/posts');

	const filteredPosts = posts ? posts.filter(post => post.userId === userId) : []

	const handlePressPost = (item) => () => {
		navigation.navigate("Detail", { ...item })
	}

	return (
		<View>
			{
				loading ? <Text>Cargando...</Text> :
				<FlatList
					data={filteredPosts}
					keyExtractor={item => String(item.id)}
					renderItem={({ item }) => <ListItem name={item.title} onPress={handlePressPost(item)} />}
				/>
			}
		</View>
	)
}

export default PostsScreen;

const styles = StyleSheet.create({});
