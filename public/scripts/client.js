/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

  //Takes in an array of tweet objects
  //Runs each tweet object through our createTweetElement function
  //Prepends each returned tweet element to the html section with class 'tweets-container'
  
  const renderTweets = function(tweets) {
    $('#tweets-container').empty();
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
  


  // Add an Event Listener and Prevent the Default Behaviour
  $('form').submit(function(event) {
    event.preventDefault();
    //Serialize the form data and send it to the server as a query string
    const serializedData = $(this).serialize();
    
    $('#tweet-text').val('');

    // Submit a POST request that sends the serialized data to the server
    $.post('/tweets', serializedData)
      .then((resp) => {
        console.log(resp);
        loadTweets();
      });
  });



  // Fetch tweets (GET) from the server
  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'JSON',
      success: (tweets) => {
        renderTweets(tweets);
      },
      error : (error) => {
        console.log(error);
      }
    });
  };

  loadTweets();

});
  

