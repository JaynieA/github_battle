import axios from 'axios';

/* Get API keys from github api and
   enter them here to prevent rate limiting */
let token = process.env.GITHUB_API_TOKEN;

function getUserInfo(username) {
  //axios.get will return a promise
  return axios.get('https://api.github.com/?access_token=' + token);
}

let helpers = {
  //loop over every username in our players array (map)
  //for each username in the array, call getUserInfo
  //everything within players.map will evaluate to an array of promises (becuase axios.get returns a promise)
  //axios.all takes an array of promises, and when each of those promises are done resolving, our .then will run
  getPlayersInfo: function(players) {
    //fetch some data fron GitHub
    return axios.all( players.map( function( username ) {
      return getUserInfo(username);
    })).then( function( info ) {
      console.log('INFO-->', info);
      //modify data before passing it back to whichever function invoked getPlayersInfo
      return info.map( function( user ) {
        //keep only .data info
        return user.data;
      });
      //Catch any errors thrown in the promise chain
    }).catch( function(err) {
      console.warn('Error in getPlayersInfo', err);
    });
  }
};

export default helpers;
