import React from 'react';

function SignUp() {
	return (
		<main class="front-container">
			<div class="menu">
				<h1>Login</h1>
				<h2>Username</h2>
				<input type="text"></input>
				<h2>Password</h2>
				<input type="password"></input>
			</div>
			<div id="sign-up-menu" class="menu">
				<h1>SignUp</h1>
				<h2>Username</h2>
				<input type="text"></input>
				<h2>Password</h2>
				<input type="password"></input>
				<h3>Address (optional)</h3>
				<h4>zip</h4>
				<input type="text"></input>
				<h4>planet # from sun</h4>
				<input type="text"></input>
				<h4>X Coordinate on planet</h4>
				<input type="text"></input>
				<h4>Y Coordinate on planet</h4>
				<input type="text"></input>
				<h4>PO Box #</h4>
				<input type="text"></input>
				<button type="button">Complete</button>
			</div>
		</main>
	);
}

export default SignUp;
