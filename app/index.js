const React = require('react');
const ReactDOM = require('react-dom');

//Create a component
const HelloWorld = React.createClass({
  //render returns what the UI of this component looks like
  render: function() {
    return (
      //Babel will transpile this JSX --> JS
      <div> Hello ReactJS Program </div>
    )
  }
});

//Doing the above using ES6 classes:
// class HelloWorld extends React.Component {
//   render() {
//     return <div> Hello World </div>
//   }
// }

ReactDOM.render(
  //How you invoke/use the component defined above
  //Says- grab the component passed (HelloWorld), and render it to 'app'
  <HelloWorld />,
  document.getElementById('app')
);
