import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/BaseComponents/Home';
import DashBoard from './components/AdminComponents/DashBoard';
import Signin from './components/BaseComponents/Signin';
import AddDoctor from './components/AdminComponents/AddDoctor';
const RouterComp = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route
					exact
					path='/admin/dashboard'
					component={DashBoard}
				/>
				<Route exact path='/signin' component={Signin} />
				<Route
					exact
					path='/admin/createdoctor'
					component={AddDoctor}
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default RouterComp;
