import React, { PropTypes } from 'react';

function puke(obj) {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

function Results ( props ) {
  return (
    <pre>Results{puke(props)}</pre>
  )
}; // end Results

Results.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

export default Results;
