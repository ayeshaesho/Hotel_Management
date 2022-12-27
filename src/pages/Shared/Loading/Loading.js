import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import './Loading.css'

const Loading = () => {
	return (
		<div className='loading'>
			 <Button variant="warning" disabled className='p-2 spinner-btn'>
				<Spinner
				as="span"
				animation="border"
				size="sm"
				role="status"
				aria-hidden="true"
				className='text-dark loading-spinner'
				/>
				<span className="visually-hidden ">Loading...</span>
  			</Button>
		</div>
	);
};

export default Loading;