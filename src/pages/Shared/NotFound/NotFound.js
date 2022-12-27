import React from 'react';
import notFound from '../../../image/NotFound/Na_Nov_26.jpg'
import './NotFound.css'

const NotFound = () => {
	return (
		<div className='vh-100 d-flex justify-content-center align-items-center not-found my-5 py-5'>
			<img  src={notFound} alt="" />
		</div>
	);
};

export default NotFound;