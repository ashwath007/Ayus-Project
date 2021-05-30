import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Base = ({ children, className, footer_className }) => {
	return (
		<div>
			<Navbar />
			<div className={className}>{children}</div>
			<div className={footer_className}>
				<Footer />
			</div>
		</div>
	);
};

export default Base;
