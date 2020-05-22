import React from 'react';

function SignUp() {
	return (
		<main>
		<div id="sign-up-menu" class="sign-menu">


			<h1>SignUp</h1>

		<label for="username">Username (5-28 characters):</label>
		<input type="text" id="signup-username" name="signup-username" required minlength="5" maxlength="28" size="28"></input>

		<label for="password">Password (at least 7 characters long):</label>
		<input type="password" id="name" name="name" required minlength="7" size="28"></input>

		<h2>Optional Address:</h2>

		<label for="zip">ZIP Code:</label>
		<input type="text" id="zip" name="zip" size="28"></input>

		<label for="planet">Planet # from star:</label>
		<input type="text" id="planet" name="planet" size="28"></input>

		<label for="xcoord">X Coordinate:</label>
		<input type="text" id="xcoord" name="xcoord" size="28"></input>

		<label for="ycoord">Y Coordinate:</label>
		<input type="text" id="ycoord" name="ycoord" size="28"></input>

		<label for="po">PO Box #:</label>
		<input type="text" id="po" name="po" size="28"></input>

		<button type="button">Register</button>
		</div>
		</main>
	);
}

export default SignUp;
