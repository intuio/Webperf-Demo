const circles = document.getElementsByClassName('circle');
const elementWidth = 100;

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

    requestAnimationFrame(update);
}

update();
