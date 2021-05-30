import React from 'react';
import Base from './Base';

const Signin = () => {
	return (
		<Base className='mt-5'>
			<h1 className='h1 text-center text-success'>
				Cure People Life ❤️
			</h1>
			<div
				class='d-flex justify-content-center'
				style={{ height: '300px' }}
			>
				<form
					style={{
						width: '40%',
					}}
				>
					<div className='form-data  mt-2'>
						<label className='font-weight-bold'>
							license No / id{' '}
						</label>
						<input
							className='form-control'
							type='text'
							placeholder='Enter your license No / id'
						/>
					</div>
					<div className='form-data  mt-2'>
						<label className='font-weight-bold'>
							Password
						</label>
						<input
							className='form-control'
							type='password'
							placeholder='Enter your password'
						/>
					</div>
					<button className='btn btn-lg btn-success form-control mt-3'>
						login
					</button>
				</form>
			</div>
		</Base>
	);
};

export default Signin;
