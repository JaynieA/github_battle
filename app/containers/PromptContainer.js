import React from 'react';
import Prompt from '../components/Prompt';

class PromptContainer extends React.Component {
  //constructor method necessary when using es6 class syntax
  constructor(props: Object, context: Object) {
    super(props, context);
    this.state = {
      username: '',
    };
    /* since there is no autobinding when using es6 classes,
      we need to bind the event handlers */
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
    this.handleSubmitUser = this.handleSubmitUser.bind(this);
  }
  handleUpdateUser(e) {
    this.setState({
      username: e.target.value
    });
  }
  handleSubmitUser(e) {
    //prevent page from reloading
    e.preventDefault();
    //cache the username and reset our state
    let username = this.state.username;
    this.setState({
      username: ''
    });

    //If on playerOne route, when click continue - go to /playerTwo
    // if on playerTwo route, when click continue - go to /battle
    if (this.props.routeParams.playerOne) {
      //go to /battle
      this.context.router.push({
        pathname: '/battle',
        //pass information to /battle route
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      });
    } else {
      // go to /playerTwo
      this.context.router.push('/playerTwo/' + this.state.username );
    }
  }
  render() {
    //Render the UI of our prompt component
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} />
    )
  }
}

PromptContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default PromptContainer;
