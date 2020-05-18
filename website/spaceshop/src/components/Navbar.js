import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
//import hazlogo from '';

function Navbar() {
	//			<Avatar src={logo} alt="logo" />
	return (
		<div class="nav-container">
			<ul class="nav-links">
				<li class="nav-item">
					<Link to="/">
						<a style={{ color: ' rgba(255, 255, 255, 0.7)' }}>Home</a>
					</Link>
				</li>
				<li class="nav-item">
					<Link to="/browse">
						<a style={{ color: ' rgba(255, 255, 255, 0.7)' }}>Browse</a>
					</Link>
				</li>

				<li class="nav-item">
					<Link to="/profile">
						<a style={{ color: ' rgba(255, 255, 255, 0.7)' }}>Profile</a>
					</Link>
				</li>
				<li class="nav-item">
					<Link to="/orders">
						<a style={{ color: ' rgba(255, 255, 255, 0.7)' }}>Orders</a>
					</Link>
				</li>
				<li class="nav-item">
					<Link to="/">
						<a style={{ color: ' rgba(255, 255, 255, 0.7)' }}>Search</a>
					</Link>
				</li>
			</ul>
			{/* <Link to="/research">
					<a class="item">Research</a>
				</Link> */}
			<div class="hamburger">
				<div class="line"></div>
				<div class="line"></div>
				<div class="line"></div>
			</div>
		</div>
	);
}

export default Navbar;
