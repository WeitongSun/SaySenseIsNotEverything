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

    document.addEventListener('mousemove', (e) => {
      const trace = document.createElement('div');
      trace.classList.add('cursor-trace');
      trace.style.left = `${e.clientX}px`;
      trace.style.top = `${e.clientY}px`;
      document.body.appendChild(trace);
  
      // Remove after animation
      setTimeout(() => {
        trace.remove();
      }, 700); // Matches fadeOut duration
    });
    