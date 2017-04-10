import React, { PropTypes } from 'react';
import Results from '../components/Results';
import githubHelpers from '../utils/githubHelpers';

class ResultsContainer extends React.Component{
  constructor(props: Object, context: Object) {
    super(props, context);
    this.state = {
      isLoading: true,
      scores: []
    }; // end state
  } // end constructor
  //When this component mounts:
  componentDidMount() {
    //get playerInfo from handleInitiateBattle() through router in ConfirmBattleContainer
    //battle players
    githubHelpers.battle(this.props.location.state.playersInfo)
    .then(function(scores) {
      this.setState({
        scores: scores,
        isLoading: false
      })
    }.bind(this));
  }
  render() {
    return (
      <Results
        isLoading={this.state.isLoading}
        playersInfo={this.props.location.state.playersInfo}
        scores={this.state.scores} />
    ) // end return
  } // end render
} // end ResultsContainer

export default ResultsContainer;
