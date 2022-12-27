// import React from 'react'
// import img1 from '../../../image/Banner/banner1 (2).jpg'
// import img2 from '../../../image/Banner/banner2.jpg'
// import img3 from '../../../image/Banner/banner3.jpg'


// import Rooms from '../rooms/Rooms';
// import './Home.css'
// import Carousel from 'react-bootstrap/Carousel';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useNavigate } from 'react-router-dom';
// import auth from '../../../firebase.init';



// const Home = () => {
// 	const navigate = useNavigate();
// 	const [user, loading, error] = useAuthState(auth);

// 	const handleEnroll = () => {
// 		navigate('/#rooms');
// 	}

// 	const handleSignupBtn = () => {
// 		navigate('/signup');
// 	}
// 	return (
// 		<div>
// 			<Carousel slide={false}>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={img1}
//           alt="First slide"
//         />
//         <Carousel.Caption>
// 		<h1>Welcome to JA Hotel</h1>
// 		<p>You can Book our Hotel Through Online</p>
// 		{
// 			user ? 
// 		<a href='#rooms' className='updatebutton btn btn-warning nav-btn mt-3 py-3 px-5 fs-5'>Book Now</a>
// 		:
// 		<button onClick={handleSignupBtn} className='updatebutton btn btn-warning nav-btn mt-3 py-3 px-5 fs-5'>Book Now</button>

//         }
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={img2}
//           alt="Second slide"
//         />

//         <Carousel.Caption>
// 		<h1>Welcome to JA Hotel</h1>
// 		<p>You can Book our Hotel Through Online</p>
// 		{
// 			user ? 
// 		<a href='#rooms' className='updatebutton btn btn-warning nav-btn mt-3 py-3 px-5 fs-5'>Book Now</a>
// 		:
// 		<button onClick={handleSignupBtn} className='updatebutton btn btn-warning nav-btn mt-3 py-3 px-5 fs-5'>Book Now</button>

//         }
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={img3}
//           alt="Third slide"
//         />

//         <Carousel.Caption>
// 		<h1>Welcome to JA Hotel</h1>
// 		<p>You can Book our Hotel Through Online</p>
// 		{
// 			user ? 
// 		<a href='#rooms' className='updatebutton btn btn-warning nav-btn mt-3 py-3 px-5 fs-5'>Book Now</a>
// 		:
// 		<button onClick={handleSignupBtn} className='updatebutton btn btn-warning nav-btn mt-3 py-3 px-5 fs-5'>Book Now</button>

//         }
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>

// 			<Rooms></Rooms>	
			
// 		</div>
// 	);
// };

// export default Home;