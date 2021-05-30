import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='navbar nav bg-success'>
			<h1 className='text-white'>
				<Link className='nav-link text-white' to='/'>
					AYUS
				</Link>
			</h1>
			<ul className='nav-item nav'>
				<li className='nav-item'>
					<Link className='nav-link text-white' to='/signin'>
						Signin
					</Link>
				</li>
				<li className='nav-item'>
					<span className='nav-link text-white'>Profile</span>
				</li>
				<li className='nav-item'>
					<span className='nav-link text-white'>Logout</span>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
