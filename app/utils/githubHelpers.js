import axios from 'axios';

/* Get API keys from github api and
   enter them here to prevent rate limiting */
let id = process.env.GITHUB_API_ID;
let sec = process.env.GITHUB_API_SECRET;
let param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
  //axios.get will return a promise
  return axios.get('https://api.github.com/users/' + username + param);
}

function getRepos(username) {
  //fetch username repos
  return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
}

function getTotalStars(repos) {
  //Calculate total stars that a user has
  //Loop over the data property on these repos, add up stargazers_count
  return repos.data.reduce(function(prev, current) {
    return prev + current.stargazers_count;
  });
}

function getPlayersData(player) {
  //get repos
  //getTotalStars
  //return an object with that data
  return getRepos(player.login)
  .then(getTotalStars)
  .then(function(totalStars) {
    return {
      followers: player.followers,
      totalStars: totalStars
    };
  });
}

function calculateScores(players) {
  //return an array after doing some fancy algorithms to determine a winner
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ];
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
  },
  battle: function(players) {
    let playerOneData = getPlayersData(players[0]);
    let playerTwoData = getPlayersData(players[1]);
    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function(err) {
        console.warn('Error in battle:', err);
      });
  }
};

export default helpers;
