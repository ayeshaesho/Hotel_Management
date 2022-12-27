import React from 'react';
import './About.css'
import profile from '../../image/profile/Ayesha_Esho.JPG';

const About = () => {
	return (
		<div className='container about'>
			<h2 className='text-center mt-5'>About</h2>
			<div style={{height:'3px', width:'40px'}} className='bg-warning fw-bold my-2 mx-auto mb-5'></div>
			<div className='blogs-question about-info'>
				<div className='about-text'>
					<h5 style={{textAlign:'justify'}}>My Name Is Ayesha Esho.I Am Study in BGC Trust University in CSE. and I Start My Internship at NXgit IT Farm This Month! My Dream Job Is To Become a Successful Software Engineer.</h5>
				</div>
				<div className='d-flex justify-content-end about-img'>
					<img height={180} src={profile} alt="" />
				</div>
			</div>
		</div>
	);
};

export default About;