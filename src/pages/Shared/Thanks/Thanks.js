import React from 'react';
import { useNavigate } from 'react-router-dom';

const Thanks = () => {
	const navigate = useNavigate();
	
	const handleBackToHome = () => {
		navigate('/home');
	}
	return (
		<div>
			<div className='vh-100 d-flex justify-content-center align-items-center not-found my-5 py-5 flex-column'>
			<h2 className='text-center'>Thanks :) for Enrolling the Course!</h2>
			<button onClick={handleBackToHome} className='btn btn-warning nav-btn my-4'>Back to Home</button>
			</div>
		</div>
	);
};

export default Thanks;