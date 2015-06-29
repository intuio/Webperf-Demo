'use strict';

var circles      = document.getElementsByClassName('circle'),
    time         = 0,
    elementWidth = 100;

function moveCircle(i, elementWidth) {
  var left = Math.sin(time + i * (6.3/circles.length)) * 2*elementWidth + 200 + 'px';
  var top = Math.cos(time + i * (6.3/circles.length)) * 2*elementWidth + 200 + 'px';
  return 'translate(' + left + ', ' + top + ')';
}

function update() {
  time += 0.01;

  for(var i=0; i < circles.length; i++) {
    circles[i].style.transform = moveCircle(i, elementWidth);
  }

  requestAnimationFrame(update);
}

update();
