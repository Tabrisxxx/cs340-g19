import React from 'react';
import { Link } from 'react-router-dom';

function Newpost() {

    function insertuserpost(title){
        console.log("insterting " + title);
    }

    function isInt(value) {
        return !isNaN(value) && 
               parseInt(Number(value)) == value && 
               !isNaN(parseInt(value, 10));
      }

    function postcomplete(){
        var bad = 0;
        var usertitle = document.getElementById('title').value;
        var usertype = document.getElementById('type').value;
        var usercost = document.getElementById('amount').value;
        var userquantity = document.getElementById('quantity').value;
        var userurl = document.getElementById('url').value;
        var message = document.getElementById('message');
        var message2 = document.getElementById('message2');
        var message3 = document.getElementById('message3');
        var message4 = document.getElementById('message4');
        message.classList.add('hidden');
        message2.classList.add('hidden');
        message3.classList.add('hidden');
        message4.classList.add('hidden');

        if(usertitle.length < 1 || usertitle.length > 255) {
            message.classList.remove('hidden');
            bad =1;
        }
        if(isInt(usercost) == 0 || isInt(userquantity) == 0){
            message2.classList.remove('hidden');
            bad =1;
        }
        else{
            if (userquantity < 1 || userquantity > 9999){
                message4.classList.remove('hidden');
                bad =1;
            }
            if (usercost < 0){
                message3.classList.remove('hidden');
                bad=1;
            }
        }
        if(bad ==0){
            insertuserpost(usertitle);
            window.location.href = "/profile";
        }

    };

	return (
		<main class="front-container">
			<div id="sign-up-menu" class="menu">
				<h1>New Post</h1>
				<h2>Title (1-255 characters)</h2>
				<input id='title' type="text"></input>
				<h2>Type</h2>
				<select id='type' class="ui dropdown">
                <option value="1">Weapon</option>
                <option value="2">Blueprint</option>
                <option value="3">Program</option>
                <option value="4">Toy</option>
                <option value="5">Raw Material</option>
                <option value="6">Music</option>
                <option value="7">Services</option>
                <option value="8">Nutrition/Substance</option>
                <option value="9">Armor/Apparel</option>
                </select>
                <h2>Single item cost (universal units)</h2>
                <div class="ui right labeled input">
                <label for="amount" class="ui label">$</label>
                <input type="text" placeholder="Amount" id="amount"></input>
                <div class="ui basic label">.00</div>
                </div>
				<h2>Quantity</h2>
				<input id='quantity' type="text"></input>
                <h2>Image URL (optional)</h2>
				<input id='url' type="text"></input>
				<button onClick={postcomplete} type="button">Complete Post!</button>
                <Link to="/profile">
					<button type="button">Quit!</button>
				</Link>
			</div>
            <div id ='message' class="ui hidden message">
                <p>You are missing fields</p>
            </div>
            <div id ='message2' class="ui hidden message">
                <p>Quantity and Cost must be a Number!</p>
            </div>
            <div id ='message3' class="ui hidden message">
                <p>Cost cannot be negative!</p>
            </div>
            <div id ='message4' class="ui hidden message">
                <p>Quantity must be between 1-9999!</p>
            </div>
		</main>
	);
}

export default Newpost;