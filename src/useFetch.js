import { useEffect, useState } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortController = new AbortController();
		setTimeout(() => {
			fetch(url, { signal: abortController.signal })
				.then((res) => {
					console.log('res', res);
					if (!res.ok) {
						//the error message that will be shown in catch callback
						throw Error('could not fetch the data for that resource');
					}
					return res.json();
				})
				.then((data) => {
					setData(data);
					setLoading(false);
					setError(null);
				})
				.catch((err) => {
					if (err.name === 'AbortError') {
						console.log('fetch aborted');
					} else {
						setLoading(false);
						setError(err.message);
					}
				});
		}, 1000);

		return () => abortController.abort();
	}, []);

	return { data, loading, error };
};

export default useFetch;
