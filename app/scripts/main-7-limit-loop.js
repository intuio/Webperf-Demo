'use strict';

const circles = document.getElementsByClassName('circle');
const elementWidth = 100;
let time = 0;

// Based on https://gist.github.com/addyosmani/5434533
const limitLoop = function limitLoop(fn, fps = 60) {
    let then = Date.now();

    // custom fps, otherwise fallback to 60
    const interval = 1000 / fps;

    return (function loop() {
        requestAnimationFrame(loop);

        // again, Date.now() if it's available
        const now = new Date().getTime();
        const delta = now - then;

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

function moveCircle(i) {
    const left = `${Math.sin(time + i * (6.3 / circles.length)) * 2 * elementWidth + 300}px`;
    const top = `${Math.cos(time + i * (6.3 / circles.length)) * 2 * elementWidth + 300}px`;
    return `translate(${left}, ${top})`;
}

function update() {
    time += 0.01;

    for (let i = 0; i < circles.length; i++) {
        circles[i].style.transform = moveCircle(i);
    }
}

limitLoop(update, 2);
