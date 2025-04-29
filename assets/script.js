$(document).ready(function() {

    // $('.loading').setInterval(function() {
    //       $(this).fadeOut(5000);
    //     });
    
    $('.pcs').each(function() {
          $(this).css({
            'top': Math.floor(Math.random() * $('.container').height()),
            'left': Math.floor(Math.random() * $('.container').width())
          });
        });
    
    setInterval(function() {
        $('.pcs').each(function() {
          $(this).css({
            'top': Math.floor(Math.random() * $('.container').height()),
            'left': Math.floor(Math.random() * $('.container').width())
          });
        });
    },100);
    
    });
    