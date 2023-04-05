const buttonEl = document.querySelector('.button');
const blockEl = document.querySelector('.block');

buttonEl.addEventListener('click', function (e) {
    blockEl.classList.toggle('visible')
});