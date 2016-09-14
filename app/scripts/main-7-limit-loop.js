'use strict';

const circles = document.getElementsByClassName('circle');
const elementWidth = 100;

// Based on https://gist.github.com/addyosmani/5434533
const limitLoop = function limitLoop(fn, fps = 60) {
    let then = Date.now();

    // custom fps, otherwise fallback to 60
    const interval = 1000 / fps;

    return (function loop(timestamp) {
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
            fn(timestamp);
        }
    }(0));
};

function moveCircle(i, timestamp) {
    const time = timestamp / 2000;
    const offset = 200;
    const left = `${Math.sin(time + i * (6.3 / circles.length)) * 2 * elementWidth + offset}px`;
    const top = `${Math.cos(time + i * (6.3 / circles.length)) * 2 * elementWidth + offset}px`;
    return `translate(${left}, ${top})`;
}

function update(timestamp) {
    for (let i = 0; i < circles.length; i++) {
        circles[i].style.transform = moveCircle(i, timestamp);
    }
}

limitLoop(update, 2);
