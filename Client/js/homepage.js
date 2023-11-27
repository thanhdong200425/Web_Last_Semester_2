const btnplay = document.querySelector('.btn-play');

btnplay.addEventListener('click', ()=> {
    btnplay.classList.toggle('pause');
    btnplay.classList.toggle('play');
})