//Returns UI for ConfirmBattle component
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from '../styles/index';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle(props) {
  console.log('hi-->', props);
  return props.isLoading === true
    ? <p> LOADING! </p>
    : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1 className='text-center'> Confirm Battle </h1>
        <div className='col-sm-8 col-sm-offset-2'>

          <UserDetailsWrapper header='Player One'>
            <UserDetails info={props.playersInfo[0]}/>
          </UserDetailsWrapper>

          <UserDetailsWrapper header='Player Two'>
            <UserDetails info={props.playersInfo[1]}/>
          </UserDetailsWrapper>

        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={styles.space}>
            <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>
              Initiate Battle!
            </button>
          </div>
          <div className='col-sm-12' style={styles.space}>
            <Link to='/playerOne'>
              <button type='button' className="btn btn-lg btn-danger">
                Reselect Players
              </button>
            </Link>
          </div>
        </div>
    </div>
}

ConfirmBattle.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
};

export default ConfirmBattle;
