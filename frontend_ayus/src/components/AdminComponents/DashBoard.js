import React, { useState } from 'react';
import './DashBoard.css';
import { Link } from 'react-router-dom';
const DashBoard = () => {
	const [users, setusers] = useState(0);
	const [doctors, setdoctors] = useState(0);
	const [active_doctors, setactive_doctors] = useState(0);
	return (
		<div className='dashboard'>
			<div className='dashboard__navigation'>
				<ul className='dashboard__navigation__item'>
					<li className='text-center'>
						<Link to='/' className='brand text-center'>
							AYUS
						</Link>
					</li>
					<li className='text-center'>
						<Link
							to='/admin/createdoctor'
							className='items text-center'
						>
							Add Doctor
						</Link>
					</li>
					<li className='text-center'>
						<Link to='/' className='items text-center'>
							View Doctor
						</Link>
					</li>
					<li className='text-center'>
						<Link to='/' className='items text-center'>
							Manage Doctor
						</Link>
					</li>
					<li className='text-center'>
						<Link to='/' className='items text-center'>
							Manage User
						</Link>
					</li>
					<li className='text-center'>
						<Link to='/' className='items text-center'>
							Manage Salary
						</Link>
					</li>
				</ul>
			</div>
			<div className='dashboard__right mr-3 ml-3'>
				<div className='jumbotron background'>
					<ul className='nav float-right fixed-top'>
						<li className='nav-item'>
							<Link
								className='nav-link text-white font-weight-bold'
								to='/'
							>
								Profile
							</Link>
						</li>
					</ul>
					<div className='row'>
						<div className='col-4'>
							<div
								className='card'
								style={{ width: '18rem' }}
							>
								<span className='h1 text-success text-center'>
									{users}
								</span>
								<p className='font-weight-bold lead text-success text-center'>
									No of users
								</p>
							</div>
						</div>
						<div className='col-4'>
							<div
								className='card'
								style={{ width: '18rem' }}
							>
								<span className='h1 text-success text-center'>
									{doctors}
								</span>
								<p className='font-weight-bold lead text-success text-center'>
									No of Doctors
								</p>
							</div>
						</div>
						<div className='col-4'>
							<div
								className='card'
								style={{ width: '18rem' }}
							>
								<span className='h1 text-success text-center'>
									{active_doctors}
								</span>
								<p className='font-weight-bold lead text-success text-center'>
									No of Active doctors
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashBoard;
