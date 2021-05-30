import React from 'react';
import Base from './Base';

const Home = () => {
	return (
		<Base className='mt-5 ' footer_className='fixed-bottom'>
			<h1 className='text-center'>AYUS</h1>
			<p className='lead text-center'>A place for Siddha doctors</p>
			<div className='d-flex justify-content-center'>
				<button class='btn btn-outline-success ml-3'>
					Get Started
				</button>
				<button class='btn btn-outline-success ml-3'>
					Be a part
				</button>
			</div>
		</Base>
	);
};

export default Home;
