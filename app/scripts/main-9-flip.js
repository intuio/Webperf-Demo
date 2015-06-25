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
    mover.style.transform = 'translate(' + invertPosition.left + 'px, ' + invertPosition.top + 'px)';

    // PLAY
    requestAnimationFrame(function() {
      mover.classList.add('has-transition');
      mover.style.transform = '';
    });

    // RESET
    mover.addEventListener('transitionend', function(){
        mover.classList.remove('has-transition');
    });
});
