//Returns UI for ConfirmBattle component
import React from 'react';

function ConfirmBattle(props) {
  return props.isLoading === true
    ? <p> LOADING! </p>
    : <p> CONFIRM BATTLE </p>
}

export default ConfirmBattle;
