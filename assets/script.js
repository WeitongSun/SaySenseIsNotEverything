// $(document).ready(function() {

//     // $('.loading').setInterval(function() {
//     //       $(this).fadeOut(5000);
//     //     });
    
//     // $('.pcs').each(function() {
//     //       $(this).css({
//     //         'top': Math.floor(Math.random() * $('.container').height()),
//     //         'left': Math.floor(Math.random() * $('.container').width())
//     //       });
//     //     });
    
//     // setInterval(function() {
//     //     $('.pcs').each(function() {
//     //       $(this).css({
//     //         'top': Math.floor(Math.random() * $('.container').height()),
//     //         'left': Math.floor(Math.random() * $('.container').width())
//     //       });
//     //     });
//     // },100);

//     // function updatePositions() {
//     //   const winW = $(window).width();
//     //   const winH = $(window).height();
    
//     //   const positions = [];
    
//     //   $('.pcs').each(function() {
//     //     const $this = $(this);
//     //     const boxW = $this.outerWidth() || 50;
//     //     const boxH = $this.outerHeight() || 50;
    
//     //     let newX, newY;
//     //     let safe = false;
//     //     let tries = 0;
    
//     //     while (!safe && tries < 100) {
//     //       newX = Math.random() * (winW - boxW);
//     //       newY = Math.random() * (winH - boxH);
//     //       safe = true;
    
//     //       // 检查和现有位置是否重叠
//     //       for (let pos of positions) {
//     //         if (Math.abs(newX - pos.x) < boxW && Math.abs(newY - pos.y) < boxH) {
//     //           safe = false;
//     //           break;
//     //         }
//     //       }
    
//     //       tries++;
//     //     }
    
//     //     positions.push({ x: newX, y: newY });
    
//     //     $this.css({
//     //       position: 'absolute',
//     //       top: newY,
//     //       left: newX
//     //     });
//     //   });
//     // }
    
    
//     // $(document).ready(function() {
//     //   updatePositions();
//     //   setInterval(updatePositions, 100);
//     // });
    
//     });

//     document.addEventListener('mousemove', (e) => {
//       const trace = document.createElement('div');
//       trace.classList.add('cursor-trace');
//       trace.style.left = `${e.clientX}px`;
//       trace.style.top = `${e.clientY}px`;
//       document.body.appendChild(trace);
  
//       // Remove after animation
//       setTimeout(() => {
//         trace.remove();
//       }, 700); // Matches fadeOut duration
//     });

$(document).ready(function () {
  const bubbles = [];

  $('.pcs').each(function (index) {
    const $this = $(this);
    const size = $this.outerWidth();
    bubbles.push({
      $el: $this,
      x: Math.random() * ($('.container').width() - size),
      y: Math.random() * ($('.container').height() - size),
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: size,
      z: index + 1
    });
  });

  function update() {
    const containerW = $('.container').width();
    const containerH = $('.container').height();

    bubbles.forEach(b => {
      b.x += b.vx;
      b.y += b.vy;

      // 边界检测，防止跑出去
      if (b.x < 0 || b.x > containerW - b.size) b.vx *= -1;
      if (b.y < 0 || b.y > containerH - b.size) b.vy *= -1;

      // 限制在container里
      b.x = Math.max(0, Math.min(b.x, containerW - b.size));
      b.y = Math.max(0, Math.min(b.y, containerH - b.size));

      // 应用位置与z-index
      b.$el.css({
        left: b.x,
        top: b.y,
        'z-index': b.z
      });
    });
  }

  setInterval(update, 30);

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
});

    