import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Checkout() {

    function completepay(){
        console.log("complete purchase");
        window.location.href = "/home";
    }

	return (
		<main>
			<Navbar/>
        <div class="front-container">
            <div id="sign-up-menu" class="menu">
				<h1>Checkout</h1>
				<form>
            <label for="fname">Universal Payment Number:</label>
            <input type="text" id="fname" name="fname"></input>
            </form>
            <div id="total-price">
            <label for="total">Total: </label>
            <p name="total">99.90</p>
            </div>
            <button onClick={completepay} type="button">Complete Purchase!</button>
            <div class="ui internally celled grid">
				<div class="row">
                <div class="four wide column">
						<h3 id='first'>Title</h3>
					</div>
					<div class="two wide column">
						<h3>Quantity</h3>
					</div>
                    <div class="two wide column">
						<h3>Listed Price</h3>
					</div>
                </div>
            </div>
			</div>


        </div>

		</main>
	);
}

export default Checkout;