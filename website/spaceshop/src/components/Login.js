import React from 'react';

function Login() {
	return (
		<main class="login-container">
			<div class="sign-menu">

			<label for="username">Username :</label>
			<input type="text" id="login-username" name="username"></input>
			<label for="password">Password :</label>
			<input type="text" id="login-password" name="name"></input>

			<button type="button">Login</button>

			<div id="no-account">
				<h4>Don't have an account?</h4>
				<a href="/SignUp">REGISTER</a>
			</div>
			</div>
		</main>
	);
}

export default Login;
