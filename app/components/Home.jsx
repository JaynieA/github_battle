import React from 'react';
import styles from '../styles/index';
import { Link } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
        <h1>Github Battle</h1>
        <p className='lead'>Some fancy motto</p>
        <Link to='/playerOne'>
          <button type="button" className='btn btn-large btn-success'>
            Get Started
          </button>
        </Link>
      </div>
    )
  } // end render
} // end Home

export default Home;
