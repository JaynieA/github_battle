const USER_DATA = {
  name: 'Jaynie Anderson',
  username: 'JaynieA',
  image: 'https://avatars2.githubusercontent.com/u/22354326?v=3&s=460'
};

const React = require('react');
const ReactDOM = require('react-dom');

class ProfilePic extends React.Component {
  render() {
    return <img src={ this.props.imageUrl } style={{ height: 100, width: 100 }} />
  }
}

class ProfileLink extends React.Component {
  render() {
    return <div>
             <a href={ 'https://www.github.com/' + this.props.username }>{ this.props.username }</a>
           </div>
  }
}

class ProfileName extends React.Component {
  render() {
    return <div>{ this.props.name }</div>
  }
}

class Avatar extends React.Component {
  render() {
    return <div>
              <ProfilePic imageUrl={ this.props.user.image } />
              <ProfileName name={ this.props.user.name }/>
              <ProfileLink username={ this.props.user.username }/>
           </div>
  }
}

ReactDOM.render(
  //How you invoke/use the component defined above
  //Says- grab the component passed (HelloWorld), and render it to 'app'
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
