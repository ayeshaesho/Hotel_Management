import React from 'react';
import { Table } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
	return (
		<div className='container blogs'>
			<h2 className='text-center mt-5'>Blogs</h2>
			<div style={{height:'3px', width:'40px'}} className='bg-warning fw-bold my-2 mx-auto mb-5'></div>
			<div className='blogs-question'>
				<h2>Q:1. Difference between `authorization` and `authentication`’?</h2>
				<p>Ans:</p>
				<h3 className='mt-3'>Authorization: </h3>
				<p>Authorization is the process of giving someone permission to do or have something.</p>
				<h3 className='mt-3'>Authentication: </h3>
				<p>Authentication is the process of determining whether someone or something is, in fact, who or what it says it is. Authentication technology provides access control for systems by checking to see if a user's credentials match the credentials in a database of authorized users or in a data authentication server.</p>
					<h3 className='mt-5'>Q:2. Why are you using `firebase`? What other options do you have to implement authentication?</h3>
					<p>Ans: Firebase gives you Backend support to build a dynamic Application. Firebase has some features, With the help of firebase you can Authenticate users, Store data in Storage and real-time Database, Host your site, and Give you some analysis that can help the system owners. Firebase gives your system very powerful security.
					</p>
					<p>
					The Other option for implementing authentication is Auth0, Okta, Passport, Amazon Congnito, Keycloak.
					</p>
					<h2 className='mt-5'>Q:3. What other services does `firebase` provide other than authentication?</h2>
					<p>Ans: Firebase provides Firestore Database, Realtime Database, Storage, Hosting, Functions, Machine Learning.</p>
			</div>
		</div>
	);
};

export default Blog;