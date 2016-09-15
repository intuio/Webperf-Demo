const mover = document.getElementsByClassName('js_move')[0];

// Pattern by Paul Lewis: https://aerotwist.com/blog/flip-your-animations/
mover.addEventListener('click', () => {
    // FIRST
    const firstPosition = mover.getBoundingClientRect(); // Layout forced btw.

    // LAST
    mover.classList.toggle('btn-mover--moved');
    const lastPosition = mover.getBoundingClientRect(); // Layout forced btw.

    // INVERT
    const invertPosition = {
        top: firstPosition.top - lastPosition.top,
        left: firstPosition.left - lastPosition.left
    };
    mover.style.transform = `translate(${invertPosition.left}px, ${invertPosition.top}px`;

    // PLAY
    requestAnimationFrame(() => {
        mover.classList.add('has-transition');
        mover.style.transform = '';
    });

    // RESET
    mover.addEventListener('transitionend', () => {
        mover.classList.remove('has-transition');
    });
});
