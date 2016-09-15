const mover = document.getElementsByClassName('js_move')[0];

mover.addEventListener('click', () =>
    mover.classList.toggle('btn-mover--moved')
);
