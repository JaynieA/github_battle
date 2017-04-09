import React, { PropTypes } from 'react';
import styles from '../styles/index';
const transparentBg = styles.transparentBg;

/* This handles the UI creation from PromptContainer
   (this is a functional stateless component) */
function Prompt (props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Github Username"
              onChange={props.onUpdateUser}
              value={props.username}
              type="text" />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-block btn-success"
              type="submit">Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  ) // end return
}; // end prompt

/* PropTypes give warnings in the console if
props are not the correct types expected */
Prompt.PropTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}

export default Prompt;