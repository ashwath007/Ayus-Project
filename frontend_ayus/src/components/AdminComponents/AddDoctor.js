import React from 'react';
import Base from '../BaseComponents/Base';

const AddDoctor = () => {
	return (
		<Base className='mt-5'>
			<h1 className='h1 text-center text-success'>
				Create New Doctor
			</h1>
			<div className='row'>
				<div className='col-md-6 offset-md-3'>
					<form>
						<div className='form-data mt-2'>
							<label className='font-weight-bold'>
								Doctor's Name
							</label>
							<input
								type='text'
								placeholder="doctor's Name"
								className='form-control'
							/>
						</div>
						<div className='form-data mt-2'>
							<label className='font-weight-bold'>
								Doctor's License Number
							</label>
							<input
								type='text'
								placeholder="doctor's License Number"
								className='form-control'
							/>
						</div>
						<div className='form-data mt-2'>
							<label className='font-weight-bold'>
								Doctor's Phone Number
							</label>
							<input
								type='text'
								placeholder="doctor's Phone Number"
								className='form-control'
							/>
						</div>
						<div className='form-data mt-2 border border-success p-4'>
							<label className='font-weight-bold'>
								Doctor's Speciality
							</label>
							<select className='custom-select custom-select-md mb-3'>
								<option selected>
									Select if present
								</option>
								<option value='1'>One</option>
								<option value='2'>Two</option>
								<option value='3'>Three</option>
							</select>
							<p className='font-weight-bold text-center'>
								or
							</p>
							<input
								className='form-control'
								placeholder='enter his specality'
								type='text'
							/>
						</div>
						<div className='form-data mt-2'>
							<label className='font-weight-bold'>
								Doctor's Address
							</label>
							<input
								type='Address'
								placeholder="doctor's Address"
								className='form-control'
							/>
						</div>
						<div className='form-data mt-2'>
							<label className='font-weight-bold'>
								Doctor's Account number
							</label>
							<input
								type='Address'
								placeholder="doctor's Account number"
								className='form-control'
							/>
						</div>
						<button className='btn btn-success form-control mt-2 mb-5'>
							Create doctor
						</button>
					</form>
				</div>
			</div>
		</Base>
	);
};

export default AddDoctor;
