import React from 'react';
import Navbar from './Navbar';

function Home() {

	function addtocart(){
		console.log("adding to cart!");
	}

	return (
		<div>
			<Navbar />
			<main class="home-container">
				<h1>Newest sales</h1>
				<div class="ui internally celled grid">
				<div class="row">
                <div class="four wide column">
						<h1 id='first'>Title</h1>
					</div>
					<div class="two wide column">
						<h1>Type</h1>
					</div>
                    <div class="two wide column">
						<h1>Listed Price</h1>
					</div>
					<div class="two wide column">
						<h1>Image</h1>
					</div>
					<div class="two wide column">
						<h1>Purchase</h1>
					</div>
                </div>
				<div class="row">
                <div class="four wide column">
						<h1 id='first'>Gold</h1>
					</div>
					<div class="two wide column">
						<h1>Raw Material</h1>
					</div>
                    <div class="two wide column">
						<h1>$79.80</h1>
					</div>
					<div class="two wide column">
					<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.middleeastmonitor.com%2Fwp-content%2Fuploads%2Fimages%2Farticle_images%2Fnews%2Fgold-bullion.jpg%3Fresize%3D1200%252C800%26quality%3D75%26strip%3Dall%26ssl%3D1&f=1&nofb=1" 
                    alt="gold!" />
					</div>
					<div class="two wide column">
					<button id="add-cart-button" onClick={addtocart} type="button">Add to cart!</button>
					</div>
                </div>
				<div class="row">
                <div class="four wide column">
						<h1 id='first'></h1>
					</div>
					<div class="two wide column">
						<h1></h1>
					</div>
                    <div class="two wide column">
						<h1></h1>
					</div>
					<div class="two wide column">
					<img/>
					</div>
					<div class="two wide column">
					
					</div>
                </div>
				<div class="row">
                <div class="four wide column">
						<h1 id='first'></h1>
					</div>
					<div class="two wide column">
						<h1></h1>
					</div>
                    <div class="two wide column">
						<h1></h1>
					</div>
					<div class="two wide column">
					<img/>
					</div>
					<div class="two wide column">
					
					</div>
                </div>
				</div>
				<h1>Trending this week</h1>
				<div class="ui internally celled grid">
				<div class="row">
                <div class="four wide column">
						<h1 id='first'>Title</h1>
					</div>
					<div class="two wide column">
						<h1>Type</h1>
					</div>
                    <div class="two wide column">
						<h1>Listed Price</h1>
					</div>
					<div class="two wide column">
						<h1>Image</h1>
					</div>
					<div class="two wide column">
						<h1>Purchase</h1>
					</div>
                </div>
				<div class="row">
                <div class="four wide column">
						<h1 id='first'>Powerful watergun!!!! For sale now!</h1>
					</div>
					<div class="two wide column">
						<h1>Weapon</h1>
					</div>
                    <div class="two wide column">
						<h1>$20.00</h1>
					</div>
					<div class="two wide column">
					<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.U1pmxK4FXvwOZnHAQJhkjwHaE7%26pid%3DApi&f=1" 
                    alt="gold!" />
					</div>
					<div class="two wide column">
					<button id="add-cart-button" onClick={addtocart} type="button">Add to cart!</button>
					</div>
                </div>
				<div class="row">
                <div class="four wide column">
						<h1 id='first'></h1>
					</div>
					<div class="two wide column">
						<h1></h1>
					</div>
                    <div class="two wide column">
						<h1></h1>
					</div>
					<div class="two wide column">
					<img/>
					</div>
					<div class="two wide column">
					
					</div>
                </div>
				<div class="row">
                <div class="four wide column">
						<h1 id='first'></h1>
					</div>
					<div class="two wide column">
						<h1></h1>
					</div>
                    <div class="two wide column">
						<h1></h1>
					</div>
					<div class="two wide column">
					<img/>
					</div>
					<div class="two wide column">
					
					</div>
                </div>
				</div>
			</main>
		</div>
	);
}

export default Home;
