import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes';

ReactDOM.render(
  //How you invoke/use the component defined above
  //Says- grab the component passed (HelloWorld), and render it to 'app'
  routes,
  document.getElementById('app')
); // end render
