/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Fake data taken from initial-tweets.json

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];


$(document).ready(function() {

  //Takes in an array of tweet objects
  //Runs each tweet object through our createTweetElement function
  //Prepends each returned tweet element to the html section with class 'tweets-container'
  
  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      let $tweet = createTweetElement(tweet);
      $('#tweets-container').prepend($tweet);
    }
  };

  // Takes in a tweet object
  //Returns a tweet <article> element containing the entire HTML structure of the tweet

  const createTweetElement = function(tweetObj) {
    let $tweet = `<article class="tweet">
      <header>
          <img src=${tweetObj.user.avatars}>
          <span>${tweetObj.user.name}</span>
          <span class="handle">${tweetObj.user.handle}</span>
      </header>
      <span>${tweetObj.content.text}</span>
      <footer>
        <span>${timeago.format(tweetObj.created_at)}</span>
        <span class="interactOptions">
          <i class="fas fa-flag icon-css"></i>
          <i class="fas fa-retweet icon-css"></i> 
          <i class="fas fa-heart icon-css"></i> 
        </span>
      </footer>
    </article>`;
    
    return $tweet;
  };
  
  renderTweets(data);
});


