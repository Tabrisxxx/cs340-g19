import React from 'react';
import Navbar from './Navbar';

function Orders() {
	return (
		<main>
			<Navbar />
			<h1>Your Orders</h1>
			<div class="ui internally celled grid">
				<div class="row">
                <div class="four wide column">
						<h1 id='first'>Title</h1>
					</div>
                    <div class="two wide column">
						<h1>Status</h1>
					</div>
					<div class="two wide column">
						<h1>Date Ordered</h1>
					</div>
					<div class="two wide column">
						<h1>Cancel</h1>
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
	);
}

export default Orders;
