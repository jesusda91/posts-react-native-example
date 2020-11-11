import React from 'react'
import Router from './Router';

const App = () => {

	const [isLoading, setIsLoading] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState();

	useEffect(()=>{
		const getToken = async () => {
			const token = await getData("token");
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
		/>
	)
}

export default App;
