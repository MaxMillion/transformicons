// Scroll Animation on Submission
// ===========================================================================

var tconsrc_os = $('.tcon-src').offset().top;

$('input[type="submit"]').on('click', function() {
  $('html, body').animate({
    scrollTop: tconsrc_os
  }, 350);
});