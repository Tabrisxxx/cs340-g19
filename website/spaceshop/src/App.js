import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Profile from './components/Profile';
import Browse from './components/Browse';
import Orders from './components/Orders';
import Front from './components/Front';
import Search from './components/Search';
import Register from './components/Register';

function App() {
	return (
		<Router>
			<div>
				<Route path="/" exact component={Front} />
				<Route path="/register" exact component={Register} />
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
