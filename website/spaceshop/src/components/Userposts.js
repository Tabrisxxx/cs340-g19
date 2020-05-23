import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Userposts() {

    function removepost(){
        console.log("removing post");
    }

	return (
		<main>
            <Navbar />
            <div class="home-container">
                <h2>Your Listed Items</h2>
                </div>
			<div class="ui internally celled grid">
            <div class="row">
                <div class="two wide column">
						<h1 id='first'>Title</h1>
					</div>
					<div class="two wide column">
						<h1>Type</h1>
					</div>
                    <div class="two wide column">
						<h1>Quantity Available</h1>
					</div>
                    <div class="two wide column">
						<h1>Listed Price</h1>
					</div>
					<div class="two wide column">
						<h1>Image</h1>
					</div>
                    <div class="two wide column">
						<h1>Edit</h1>
					</div>
                </div>
				<div class="row">
                <div class="two wide column">
						<h3 id='first'>Gold</h3>
					</div>
					<div class="two wide column">
						<h3>Raw Material</h3>
					</div>
                    <div class="two wide column">
						<h3>79</h3>
					</div>
                    <div class="two wide column">
						<h3>$43.98</h3>
					</div>
					<div class="two wide column">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.middleeastmonitor.com%2Fwp-content%2Fuploads%2Fimages%2Farticle_images%2Fnews%2Fgold-bullion.jpg%3Fresize%3D1200%252C800%26quality%3D75%26strip%3Dall%26ssl%3D1&f=1&nofb=1" 
                    alt="gold!" />
					</div>
                    <div>
                    <button id="remove-post-button" onClick={removepost} type="button">Remove Post!</button>
                    </div>
				</div>
            </div>
		</main>
    );
}
export default Userposts;