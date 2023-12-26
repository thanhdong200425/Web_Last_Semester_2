let currentSong = 0;

const music = document.querySelector('#audio');
const btnplay = document.querySelector('.btn-play');
const singer = document.querySelector('.nameSinger');
const songname = document.querySelector('.nameSong');
const currentTime = document.querySelector('.left_time');
const musicTime = document.querySelector('.right_time');
const btnBack = document.querySelector('.skip_back');
const btnNext = document.querySelector('.skip_next');
const seekbar = document.querySelector('.seek_bar');
const img = document.querySelector('.image_song');



// Cai dat bai hat

const setSong = (i)=> {
    seekbar.value = 0;
    let song = song[i];
    currentSong = i;
    music.src = songs.path;
    songname.innerHTML = songs.name;
    singer.innerHTML = songs.singers;
    img.src = `url('${songs.image}')`;

    currentTime.innerHTML = '00:00';
    setTimeout(()=> {
        seekbar.max = music.duration;
        musicTime.innerHTML = music.duration;
    }, 300);
}

setSong(0);