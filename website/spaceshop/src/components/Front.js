import React from 'react';
import { Link } from 'react-router-dom';

function Front() {
	return (
		<main class="front-container">
			<div class="menu">
				<h1>Login</h1>
				<h2>Username</h2>
				<input type="text"></input>
				<h2>Password</h2>
				<input type="password"></input>
			</div>

			<Link to="/home">
				<button type="button">Sign In</button>
			</Link>
			<Link to="/register">
				<button type="button">Register</button>
			</Link>
		</main>
	);
}

export default Front;
