import React, { useEffect, useState } from 'react'
import { getAsyncData } from './helpers/common-functions';
import Router from './Router';
import * as Font from 'expo-font';
import Loading from './components/utils/Loading';

const App = () => {

	const [isLoading, setIsLoading] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState();
	const [fontLoaded, setFontLoaded] = useState(false);

	const loadFonts = async () => {
		await Font.loadAsync({
			'Poppins': require('./assets/fonts/Poppins/Poppins-Regular.ttf')
		});
		setFontLoaded(true);
	}

	useEffect(()=>{
		const getToken = async () => {
			const token = await getAsyncData("token");
			if (token) {
				setIsLoggedIn(true);
			}
			setIsLoading(false);
		}
		getToken();

		loadFonts();
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
