'use strict';

var mover = document.getElementsByClassName('js_move')[0];

mover.addEventListener('click', function() {
    mover.classList.toggle('mover--moved');
});
