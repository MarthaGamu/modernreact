import { useEffect, useState } from 'react';
import BlogList from './BlogList';
import useFetch from '../useFetch';

const Home = () => {
	const { error, loading, data } = useFetch('http://localhost:3000/blogs');

	// const handleClick = () => {
	// 	console.log(' clicked button');
	// };

	// const handleAgain = (item) => {
	// 	console.log(`first ${item} `);
	// };

	// const handleUpdate = () => {
	// 	setName('Martha');
	// };
	return (
		<div className='home'>
			{/* <h2>Homepage</h2>
			<button onClick={handleClick}>Click me</button>
			<button onClick={handleUpdate}>{name}</button>
			<button
				onClick={() => {
					handleAgain('handle');
				}}
			>
				handleAgain
			</button> */}
			{error && <div> {error} </div>}
			{loading && <div>The application is loading</div>}
			{data && <BlogList blogs={data} />}
		</div>
	);
};

export default Home;
