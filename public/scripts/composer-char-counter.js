$(document).ready(function() {
  
  $('#tweet-text').on("input", function() {
    const inputLength = $(this).val().length;
    const counter = $(this).siblings('.counter');
    const tweetLengthLimit = 140;
    
    if (inputLength > tweetLengthLimit) {
      counter.addClass('tweetTooLong');
    } else if (inputLength <= tweetLengthLimit) {
      counter.removeClass('tweetTooLong');
    }
    counter.text(tweetLengthLimit - inputLength);
  });
});
