import React from 'react';
import Navbar from './Navbar';

function Browse() {

	function addtocart(){
		console.log("adding to cart");
	}

	return (
		<div>
			<Navbar />
			<main class="browse-main">
				<div class="side-menu">
					<div class="ui secondary horizontal pointing menu">
						<a class="item active">Weapons</a>
						<a class="item">Blueprints</a>
						<a class="item">Program</a>
						<a class="item">Toy</a>
						<a class="item">Raw Material</a>
						<a class="item">Music</a>
						<a class="item">Services</a>
						<a class="item">Nutrition/Substance</a>
						<a class="item">Armor/Apparel</a>
					</div>
				</div>
				<div class="ui internally celled grid">
				<div class="row">
                <div class="four wide column">
						<h1 id='first'>Title</h1>
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
						<h1 id='first'></h1>
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

export default Browse;
