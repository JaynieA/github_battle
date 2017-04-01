/* Contains all of the declarative
   routes for our app */
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//Import components to route to
import Main from '../components/Main';
import Home from '../components/Home';

//Build our routes
const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='/home' component={Home}/>
    </Route>
  </Router>
); // end routes

// //Export our routes from this file
export default routes;
