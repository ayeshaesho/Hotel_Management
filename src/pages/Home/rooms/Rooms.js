import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import Room from '../room/Room';
import './Rooms.css'

const Rooms = () => {
	const [room, setRoom] = useState([]);
	
	
	useEffect(() =>{
		
		fetch('/rooms.json')
		.then(res => res.json())
		.then(data => setRoom(data));
	},[]);

	return (
		<div className='container my-5' id='courses'>
			<h2 className='fs-5 text-center' >Room services</h2>
			<div style={{height:'3px', width:'40px'}} className='bg-warning fw-bold mx-auto'></div>
			<h1 className='my-3 text-center'>Types of Room</h1>
			{
				(room.length===0)?
				<Loading></Loading>
				:
				<div className='courses-all '>
					{
						room.map(data => <Room
							key={data.id}
							data={data}
						></Room>)
					}
				</div>
			}
			
		</div>
	);
};

export default Rooms;