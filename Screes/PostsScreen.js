import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ListItem from '../components/ListItem'

const PostsScreen = ({ route, navigation }) => {
	const { userId } = route.params;
	const [loading, setLoading] = useState(true);
	const [posts, setPosts] = useState(true);

	const fetchPosts = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		let posts = await response.json();
		posts = posts.filter(post => post.userId === userId)
		setPosts(posts);
		setLoading(false);
	}

	useEffect(() => {
		fetchPosts();
	}, []);

	const handlePressPost = (item) => () => {
		navigation.navigate("Detail", { ...item })
	}

	return (
		<View>
			{
				loading ? <Text>Cargando...</Text> :
				<FlatList
					data={posts}
					keyExtractor={item => String(item.id)}
					renderItem={({ item }) => <ListItem name={item.title} onPress={handlePressPost(item)} />}
				/>
			}
		</View>
	)
}

export default PostsScreen;

const styles = StyleSheet.create({});
