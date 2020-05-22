import React from 'react';
import Navbar from './Navbar';

var $username = 'crayolaguy';

function Profile() {
	return (
		<div>
			<Navbar />

			<main>
				<div class="menu">
					<h1>Your Profile</h1>
					<h2>Username:</h2>
					<p id="user">NULL</p>
					<h2>Zip:</h2>
					<p>
						<var>$user_zip</var>
					</p>
					<h2>Planet # from star:</h2>
					<p>
						<var>$user_planet</var>
					</p>
					<h2>X coordinate:</h2>
					<p>
						<var>$user_xcoord</var>
					</p>
					<h2>Y coordinate:</h2>
					<p>
						<var>$user_ycoord</var>
					</p>
					<h2>PO Box:</h2>
					<p>
						<var>$user_PO</var>
					</p>
				</div>
			</main>
		</div>
	);
}

//document.getElementById('user').value = "NOTHING";

export default Profile;
