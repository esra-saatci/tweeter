$(document).ready(function() {
  // Implement character counter
  $('#tweet-text').on("input", function() {
    const inputLength = $(this).val().length;
    const counter = $(this).siblings('.counter');
    const tweetLengthLimit = 140;
    
    // Turns red when character limit is exceeded
    if (inputLength > tweetLengthLimit) {
      counter.addClass('tweetTooLong');
    // Stays in the default color if within the limit
    } else if (inputLength <= tweetLengthLimit) {
      counter.removeClass('tweetTooLong');
    }
    counter.text(tweetLengthLimit - inputLength);
  });
});
