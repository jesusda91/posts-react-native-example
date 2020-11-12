import React, { useEffect, useState } from 'react'
import { getAsyncData } from './helpers/common-functions';
import Router from './Router';

const App = () => {

	const [isLoading, setIsLoading] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState();

	useEffect(()=>{
		const getToken = async () => {
			const token = await getAsyncData("token");
			if (token) {
				setIsLoggedIn(true);
			}
			setIsLoading(false);
		}
		getToken();
	}, [])

	return (
		<Router
			isLoading={isLoading}
			isLoggedIn={isLoggedIn}
			setIsLoggedIn={setIsLoggedIn}
		/>
	)
}

export default App;
