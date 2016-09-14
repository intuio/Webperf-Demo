'use strict';

const circles = document.getElementsByClassName('circle');
const elementWidth = 100;
let start = null;

function moveCircle(i, timestamp) {
    const time = timestamp / 2000;
    const offset = 300;
    const left = `${Math.sin(time + i * (6.3 / circles.length)) * 2 * elementWidth + offset}px`;
    const top = `${Math.cos(time + i * (6.3 / circles.length)) * 2 * elementWidth + offset}px`;
    return `left: ${left}; top: ${top};`;
}

function update() {
    if (!start) start = Date.now();
    const timestamp = Date.now() - start;

    for (let i = 0; i < circles.length; i++) {
        circles[i].style.cssText = moveCircle(i, timestamp);
    }

    setTimeout(update, 16);
}

update();
