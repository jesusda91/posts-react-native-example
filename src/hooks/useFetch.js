import { useEffect, useState } from 'react'

const useFetch = (url, requestOptions = {}) => {

	const [loading, setLoading] = useState();
	const [data, setData] = useState();
	const [error, setError] = useState();

	const fetchData = async () => {
		try {
			const response = await fetch(url, requestOptions);
			const data = await response.json();
			setData(data);
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchData();
	}, [])

	return { loading, data, error }
}

export default useFetch;
