import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';

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
  componentDidMount() {
    //grab usernames and fetch their info from the GitHub API
    let query = this.props.location.query;
    console.log('componentDidMount query-->', query);
    //TODO: Fetch info from github then update the state
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
