import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const useFetch = (url) => {

	const [loading, setLoading] = useState();
	const [data, setData] = useState();

	const fetchData = async () => {
		const response = await fetch(url);
		const data = await response.json();
		setLoading(false);
		setData(data);
	}

	useEffect(() => {
		fetchData();
	}, [])

	return { loading, data }
}

export default useFetch;
