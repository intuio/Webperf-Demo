'use strict';

var smileys      = document.getElementsByClassName('smiley'),
    time         = 0,
    elementWidth = 100;

// Taken from https://gist.github.com/addyosmani/5434533
var limitLoop = function (fn, fps) {
    // Use var then = Date.now(); if you
    // don't care about targetting < IE9
    var then = new Date().getTime();

    // custom fps, otherwise fallback to 60
    fps = fps || 60;
    var interval = 1000 / fps;

    return (function loop(){
        requestAnimationFrame(loop);

        // again, Date.now() if it's available
        var now = new Date().getTime();
        var delta = now - then;

        if (delta > interval) {
            // Update time
            // now - (delta % interval) is an improvement over just
            // using then = now, which can end up lowering overall fps
            then = now - (delta % interval);

            // call the fn
            fn();
        }
    }(0));
};

function moveSmiley(i, elementWidth) {
  var left = Math.sin(time + i * (6.3/smileys.length)) * 2*elementWidth + 200 + 'px';
  var top = Math.cos(time + i * (6.3/smileys.length)) * 2*elementWidth + 200 + 'px';
  return 'translate(' + left + ', ' + top + ')';
}

function update() {
  time += 0.01;

  for(var i=0; i < smileys.length; i++) {
    smileys[i].style.transform = moveSmiley(i, elementWidth);
  }
}

limitLoop(update, 2);
