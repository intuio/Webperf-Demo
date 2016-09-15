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

    // PLAY
    const player = mover.animate([
        { transform: `translate(${invertPosition.left}px, ${invertPosition.top}px)` },
        { transform: 'translate(0, 0)' }
    ], {
        duration: 2000,
        easing: 'cubic-bezier(0, 0, 0.32, 1)',
    });

    // RESET
    player.addEventListener('finish', () => { console.log('done'); });
});
