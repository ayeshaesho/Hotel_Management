// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Room.css'

// const Room = ({data}) => {
// 	const {id, name, image, price, description} = data;
// 	const navigate = useNavigate();

// 	const handleNavigateCheckout = () => {
// 		navigate(`/course/${id}`);
// 	}
// 	return (
// 		<div className='course'>
// 			<div>
// 				<img src={image} alt="" />
// 			</div>
// 			<div className='course-info'>
// 				<div>
// 					<h4 className='mb-4'>Room type: {name}</h4>
// 					<p className=''>{(description.length>30)?`${description.slice(0,50)}...`:description}</p>
					
// 				</div>
// 				<div>
// 					<p className=''>Price: ${price}</p>
// 					<button onClick={handleNavigateCheckout} className='btn btn-warning nav-btn enroll-btn w-100 py-3'>Book Now</button>
// 				</div>
// 			</div>
			
// 		</div>
// 	);
// };

// export default Room;