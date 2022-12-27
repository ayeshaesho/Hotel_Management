import React from 'react';
import './Social.css'
import {FcGoogle} from 'react-icons/fc';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const Social = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	const handleGoogle = () => {
		signInWithGoogle();
	}
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from.pathname || '/';
	if(user){
		navigate(from, {replace:true});
	}
	return (
		<div>
			<div>
				<div className="d-flex align-items-center">
					<div style={{ height: "1px" }} className="bg-dark w-50"></div>
					<p className="mt-2 px-3">or</p>
					<div style={{ height: "1px" }} className="bg-dark w-50"></div>
				</div>
				<div>
					<button onClick={handleGoogle} className='btn btn-transparent border w-100 py-2 d-flex justify-content-center align-items-center'><FcGoogle className='me-3 fs-4'></FcGoogle>Google</button>
				</div>
			</div>
		</div>
	);
};

export default Social;