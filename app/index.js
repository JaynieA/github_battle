// const USER_DATA = {
//   name: 'Jaynie Anderson',
//   username: 'JaynieA',
//   image: 'https://avatars2.githubusercontent.com/u/22354326?v=3&s=460'
// };

const React = require('react');
const ReactDOM = require('react-dom');
const routes = require('./config/routes');

// class ProfilePic extends React.Component {
//   render() {
//     return <img src={ this.props.imageUrl } style={{ height: 100, width: 100 }} />;
//   }
// }
//
// class Link extends React.Component {
//   //handle pre-binding of `this` to the component in the constructor
//   constructor() {
//     super();
//     this.changeURL = this.changeURL.bind(this);
//   }
//   render() {
//     console.log('Link\'s props.children-->', this.props.children);
//     return <span
//             style={{ color:'blue', cursor:'pointer' }}
//             onClick={ this.changeURL }>
//               { this.props.children }
//            </span>;
//   }
//   changeURL() {
//     console.log(this);
//     window.location.replace(this.props.href);
//   }
// }
//
// class ProfileLink extends React.Component {
//   render() {
//     console.log(this.props);
//     return <div>
//              <Link href={ 'https://www.github.com/' + this.props.username }>
//               { this.props.username }
//              </Link>
//            </div>;
//   }
// }
//
// class ProfileName extends React.Component {
//   render() {
//     return <div>{ this.props.name }</div>;
//   }
// }
//
// class Avatar extends React.Component {
//   render() {
//     return <div>
//               <ProfilePic imageUrl={ this.props.user.image } />
//               <ProfileName name={ this.props.user.name }/>
//               <ProfileLink username={ this.props.user.username }/>
//            </div>;
//   }
// }

ReactDOM.render(
  //How you invoke/use the component defined above
  //Says- grab the component passed (HelloWorld), and render it to 'app'
  // <Avatar user={USER_DATA} />,
  routes,
  document.getElementById('app')
);
