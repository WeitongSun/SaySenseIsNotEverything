$(document).ready(function() {

    // $('.loading').setInterval(function() {
    //       $(this).fadeOut(5000);
    //     });
    
    // $('.pcs').each(function() {
    //       $(this).css({
    //         'top': Math.floor(Math.random() * $('.container').height()),
    //         'left': Math.floor(Math.random() * $('.container').width())
    //       });
    //     });
    
    // setInterval(function() {
    //     $('.pcs').each(function() {
    //       $(this).css({
    //         'top': Math.floor(Math.random() * $('.container').height()),
    //         'left': Math.floor(Math.random() * $('.container').width())
    //       });
    //     });
    // },100);

    function updatePositions() {
      const winW = $(window).width();
      const winH = $(window).height();
    
      $('.pcs').each(function() {
        const $this = $(this);
    
        // 获取宽高（防止为0）
        const boxW = $this.outerWidth() || 50;
        const boxH = $this.outerHeight() || 50;
    
        const maxX = Math.max(0, winW - boxW);
        const maxY = Math.max(0, winH - boxH);
    
        $this.css({
          position: 'absolute',
          top: Math.random() * maxY,
          left: Math.random() * maxX
        });
      });
    }
    
    
    $(document).ready(function() {
      updatePositions();
      setInterval(updatePositions, 100);
    });
    


    
    
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
    