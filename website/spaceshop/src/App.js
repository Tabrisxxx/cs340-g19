import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Browse from './components/Browse';
import Orders from './components/Orders';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Search from './components/Search';

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Route path="/" exact component={Login} />
				<Route path="/signup" exact component={SignUp} />
				<Route path="/home" exact component={Home} />
				<Route path="/browse" exact component={Browse} />
				<Route path="/profile" exact component={Profile} />
				<Route path="/orders" exact component={Orders} />
				<Route path="/search" exact component={Search} />
			</div>
		</Router>
	);
}

export default App;
