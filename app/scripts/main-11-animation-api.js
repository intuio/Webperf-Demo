'use strict';

var mover = document.getElementsByClassName('js_move')[0];

// Pattern by Paul Lewis: https://aerotwist.com/blog/flip-your-animations/
mover.addEventListener('click', function() {
    // FIRST
    var firstPosition = mover.getBoundingClientRect(); // Layout forced btw.

    // LAST
    mover.classList.toggle('btn-mover--moved');
    var lastPosition = mover.getBoundingClientRect(); // Layout forced btw.

    // INVERT
    var invertPosition = {
        top: firstPosition.top - lastPosition.top,
        left: firstPosition.left - lastPosition.left};

    // PLAY
    var player = mover.animate([
      { transform: 'translate(' + invertPosition.left + 'px,' + invertPosition.top + 'px)' },
      { transform: 'translate(0, 0)' }
    ], {
      duration: 2000,
      easing: 'cubic-bezier(0, 0, 0.32, 1)',
    });

    // RESET
    player.addEventListener('finish', function(){console.log('done');});
});
