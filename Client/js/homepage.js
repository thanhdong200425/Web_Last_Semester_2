const btnplay = document.querySelector('.btn-play');
const btnmute = document.querySelector('.bxs-volume-full');
const iconVolume = document.getElementById('iconVolume');
const inputVolume = document.getElementById('inputVolume');
const navbar = document.getElementById('header-navbar');

//Hieu ung play-pause
btnplay.addEventListener('click', ()=> {
    btnplay.classList.toggle('pause');
    btnplay.classList.toggle('play');
});

// Doi mau trai tim
function changeColor() {
    var heart = document.getElementById("heart");
    heart.classList.toggle("clicked");
}

//Hieu ung mute
btnmute.addEventListener('click', ()=> {
    btnmute.classList.toggle('mute');
    btnmute.classList.toggle('unmute');
});

// Hieu ung input volume
var currentval = 0;
iconVolume.addEventListener('click', ()=> {
    if (currentval === 0) {
        inputVolume.value = 100;
        currentval = 100;
    }else {
        inputVolume.value = 0;
        currentval = 0;
    }
});

// Hieu ung scroll navbar
window.addEventListener('scroll', ()=> {
    var scrolled = window.scrollY > 0;

    if (scrolled) {
        navbar.classList.add('scrolled');
    }else {
        navbar.classList.remove('scrolled');
    }
})