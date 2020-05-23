import React from 'react';
import { getElementError } from '@testing-library/react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Profile() {
	function getuser() {
		return 'crayolaguy';
	}

	function getzip() {
		return '35345';
	}

	function getxcoord() {
		return '34892';
	}
	function getycoord() {
		return '84929';
	}
	function getplanet() {
		return '9';
	}
	function getpo() {
		return '231';
	}

	function editcomplete() {}

	return (
		<main>
			<Navbar />
			<div>
				<div class="sign-menu">
					<h1>Your Profile</h1>
					<p>(to edit something, simply edit the box)</p>
					<h2 id="username">{getuser()}</h2>
					<label for="password">Password (at least 7 characters long):</label>
					<input type="password" id="name" name="name" required minlength="7" size="28"></input>

					<h2>Optional Address:</h2>

					<label for="zip">ZIP Code:</label>
					<input type="text" id="zip" name="zip" size="28" placeholder={getzip()}></input>

					<label for="planet">Planet # from star:</label>
					<input type="text" id="planet" name="planet" size="28" placeholder={getplanet()}></input>

					<label for="xcoord">X Coordinate:</label>
					<input type="text" id="xcoord" name="xcoord" size="28" placeholder={getxcoord()}></input>

					<label for="ycoord">Y Coordinate:</label>
					<input type="text" id="ycoord" name="ycoord" size="28" placeholder={getycoord()}></input>

					<label for="po">PO Box #:</label>
					<input type="text" id="po" name="po" size="28" placeholder={getpo()}></input>

				
					<button onClick={editcomplete} type="button">
						Complete Edit
					</button>
					<div class='button-list'>
				<Link to="/newpost">
					<button type="button">Post New Item</button>
				</Link>
				<Link to="/userposts">
					<button type="button">View Open Items</button>
				</Link>
				</div>
				</div>
			</div>
		</main>
	);
}

export default Profile;
