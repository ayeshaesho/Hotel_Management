import React, { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Signup.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import Social from '../../Shared/Social/Social';



const Signup = () => {
	const [error, setError] =  useState('');
	const [errorShow, setErrorShow] = useState(true);
	const [
		createUserWithEmailAndPassword,
		user,
		loading,
		createEmailError,
	  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
	  const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);
	  const navigate = useNavigate();
	  let errorElement;
	  
	
	if(createEmailError || updateProfileError){
		errorElement = <div>
			<p className='text-danger'>Error: {createEmailError?.message} {updateProfileError?.message}</p>
		</div>
	}
	
	if(loading || updating){
		return <Loading></Loading>;
	}
	if(user){
		navigate('/home');
	}
	const handleSubmit = async (event) => {
		event.preventDefault();
		errorElement = '';
		const name = event.target.name.value;
		const email = event.target.email.value;
		const password = event.target.password.value;
		const confirmPassword = event.target.confirmPassword.value;
		if(password!==confirmPassword){
			setErrorShow(false);
			setError('Password is not matched!');
			return;
		}
		if(password.length<6){
			setErrorShow(false);
			setError('Password must be minimum 6 character!')
			return;
		} 
		setErrorShow(true);
		setError('');
		await createUserWithEmailAndPassword(email, password);
		await updateProfile({displayName:name});
	}
	return (
		<div className='container login d-flex justify-content-center align-items-start'>
			<div className='login-container'>
				<h3 className='text-center mb-4'>Signup</h3>
				<form onSubmit={handleSubmit}>
					<FloatingLabel
						controlId="floatingInput"
						label="Name"
						className="mb-3"
					>
						<Form.Control type="text" placeholder="Your Name" name='name' required/>
					</FloatingLabel>
					<FloatingLabel
						controlId="floatingInput"
						label="Email address"
						className="mb-3"
					>
						<Form.Control type="email" placeholder="name@example.com" name='email' required/>
					</FloatingLabel>
					<FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
						<Form.Control type="password" placeholder="Password" name='password' required />
					</FloatingLabel>
					<FloatingLabel controlId="floatingPassword" label="Confirm Password" className="mb-3">
						<Form.Control type="password" placeholder="Confirm Password" name='confirmPassword' required />
					</FloatingLabel>
					{/* <p className='my-3'>Forgotten password? <span style={{cursor:'pointer'}} className='text-primary'>reset now</span></p> */}
					{
						errorShow?errorElement:''
					}
					<p className='text-danger'>{error}</p>
					<button className='btn btn-warning nav-btn login-btn py-3'>Signup</button>
				</form>
				<p className='my-3 text-center'>Already have account? <Link to='/login' style={{cursor:'pointer', textDecoration:'none'}} className='text-primary'>login now</Link></p>
				<Social></Social>
			</div>
			
		</div>
	);
};

export default Signup;