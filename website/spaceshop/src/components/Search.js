import React from 'react';
import Navbar from './Navbar';

function Search() {

	function addtocart(){

	}

	return (
		<main>
			<Navbar />
			<div class="ui input">
				<input type="text" placeholder="Search Item..." />
			</div>
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
	);
}

export default Search;
