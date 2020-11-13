import React, { useEffect, useState } from 'react'
import { getAsyncData } from './helpers/common-functions';
import Router from './Router';
import { useFonts } from 'expo-font';
import Loading from './components/utils/Loading';

const App = () => {

	const [isLoading, setIsLoading] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState();
	const [fontLoaded] = useFonts({
		'Poppins': require('./assets/fonts/Poppins/Poppins-Regular.ttf')
	});

	useEffect(()=>{
		const getToken = async () => {
			const token = await getAsyncData("token");
			if (token) {
				setIsLoggedIn(true);
			}
			setIsLoading(false);
		}
		getToken();
	}, []);

	if (!fontLoaded) {
		return <Loading />;
	}

	return (
		<Router
			isLoading={isLoading}
			isLoggedIn={isLoggedIn}
			setIsLoggedIn={setIsLoggedIn}
		/>
	)
}

export default App;
