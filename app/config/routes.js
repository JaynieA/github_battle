//Contains all of the declarative routes for our app
const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

//require components to route to
const Main = require('../components/Main');
const Home = require('../components/Home');

//Build our routes
const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='/home' component={Home}/>
    </Route>
  </Router>
);

// //Export our routes from this file
module.exports = routes;
