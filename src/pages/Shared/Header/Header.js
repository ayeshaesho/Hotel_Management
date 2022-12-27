import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
	const navigate = useNavigate();
	const [user, loading, error] = useAuthState(auth);

	const handleLoginBtn = () => {
		navigate('/login');
	}
	const handleSignout = () =>{
		signOut(auth);
	}
	return (
		<div>
			<Navbar className='py-2' collapseOnSelect expand="lg" fixed='top' bg="light" variant="light">
				<Container>
				<Navbar.Brand as={Link} to="/home" className='fw-bold'>JA Hotel</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className='ms-auto'>
						<Nav.Link as={Link} to="/home" className='text-center menu-item'>Home</Nav.Link>
						<Nav.Link as={Link} to="/blogs" className='text-center menu-item'>Blogs</Nav.Link>
						<Nav.Link as={Link} to="/about" className='text-center menu-item'>About</Nav.Link>
						<div className=' mx-3 my-2	 d-flex justify-content-center align-items-center'>
							<p className='m-0'>{user?.displayName}</p>
						</div>
						{
							user?
							<div className='d-flex justify-content-center align-items-center'>
							<button onClick={handleSignout} className='btn btn-warning nav-btn px-3 ms-lg-4 ms-2 w-lg-100 my-lg-0 my-2'>Logout</button>
							</div>
							:
							<div className='d-flex justify-content-center align-items-center'>
							<button onClick={handleLoginBtn} className='btn btn-warning nav-btn px-3 ms-lg-4 ms-2 w-lg-100 my-lg-0 my-2'>Login</button>
							</div>
						}
					</Nav>
				</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;