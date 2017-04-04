import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';

class ConfirmBattleContainer extends React.Component {
  constructor(props: Object, context: Object) {
    super(props, context);
    this.state = {
      isLoading: true,
      playerInfo: []
    }; // end state
  } // end constructor
  render() {
    return <ConfirmBattle />
  }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}; // end contextTypes

export default ConfirmBattleContainer;
