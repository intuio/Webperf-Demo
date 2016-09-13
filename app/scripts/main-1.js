'use strict';

const circles = document.getElementsByClassName('circle');
let time = 0;

function moveCircle(i, elementWidth) {
    const left = `${Math.sin(time + i * (6.3 / circles.length)) * 2 * elementWidth + 300}px`;
    const top = `${Math.cos(time + i * (6.3 / circles.length)) * 2 * elementWidth + 300}px`;
    return `left: ${left}; top: ${top};`;
}

function update() {
    time += 0.01;

    for (let i = 0; i < circles.length; i++) {
        const elementWidth = circles[i].offsetWidth;
        circles[i].style.cssText = moveCircle(i, elementWidth);
    }

    setTimeout(update, 16);
}

update();
