'use strict';

var smileys      = document.getElementsByClassName('smiley'),
    time         = 0,
    elementWidth = 100;

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

  requestAnimationFrame(update);
}

update();
