import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import githubHelpers from '../utils/githubHelpers';

class ConfirmBattleContainer extends React.Component {
  constructor(props: Object, context: Object) {
    super(props, context);
    console.log('constructor method sets state');
    this.state = {
      isLoading: true,
      playersInfo: []
    }; // end state
  } // end constructor
  /*
   ** ==== LifeCycle Events ===== **
  */
  //Runs before the component renders
  componentWillMount() {
    console.log('componentWillMount');
  }
  //Runs once a component has rendered
  //Most of your 'side effects' will go inside of `componentDidMount`
  componentDidMount() {
    //grab usernames and fetch their info from the GitHub API
    let query = this.props.location.query;
    console.log('componentDidMount query-->', query);
    //Fetch info from github then update the state
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    //call .then on the promise returned from getPlayersInfo's .then
    .then( function( players ) {
      console.log('PLAYERS-->', players );
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
      });
    //bind `this` from the outer function to this in setState
    }.bind(this));
  }
  //Runs anytime this component receives props
  componentWillReceiveProps() {
    console.log('componentWillRecieveProps');
  }
  //Runs when component is unmounted
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return <ConfirmBattle
              isLoading={this.state.isLoading}
              playersInfo={this.state.playersInfo}/>
  }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}; // end contextTypes

export default ConfirmBattleContainer;
