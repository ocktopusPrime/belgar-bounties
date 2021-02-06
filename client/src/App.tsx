import React from 'react';

// Import Components
import Homepage from 'components/homepage/Homepage';
import NotFound from 'components/notFound/NotFound';
import NavBar from 'components/navBar/NavBar';

// Import Utilities
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

export default function App() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
}
