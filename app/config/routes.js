//Contains all of the declarative routes for our app
const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const ReactRouterDom = require('react-router-dom');
const HashRouter = ReactRouterDom.HashRouter;

//require components to route to
const Main = require('../components/Main');
const Home = require('../components/Home');

//Build our routes
const routes = (
  <HashRouter>
    <div>
      <Route path='/' component={ Main } />
      <Route path='/home' component={ Home } />
    </div>
   </HashRouter >
);

//Export our routes from this file
module.exports = routes;
