/* Contains all of the declarative
   routes for our app */
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//Import components to route to
import Main from '../components/Main';
import Home from '../components/Home';
import PromptContainer from '../containers/PromptContainer';

//Build our routes
/* No matter what path someone goes to,
   always make sure the Main component is active.
   Use IndexRoute to Activate Home component only
   when none of the following routes are active */
const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path='playerOne' header='Player One' component={PromptContainer} />
      <Route path='/playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
    </Route>
  </Router>
); // end routes

export default routes;
