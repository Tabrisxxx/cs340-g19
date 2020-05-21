import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
//import hazlogo from '';

function Navbar() {
	//			<Avatar src={logo} alt="logo" />
	return (
		<div class="ui inverted segment" style={{ 'border-radius': '0px' }}>
			<div class="ui inverted secondary pointing menu">
				<Link to="/home">
					<a class="item">Home</a>
				</Link>
				<Link to="/browse">
					<a class="item active">Browse</a>
				</Link>
				<Link to="/profile">
					<a class="item">Profile</a>
				</Link>
				<Link to="/orders">
					<a class="item">Orders</a>
				</Link>
				<Link to="/search">
					<a class="item">Search</a>
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
