document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav_link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Loại bỏ lớp 'active' từ tất cả các liên kết
            navLinks.forEach(otherLink => otherLink.classList.remove('active'));

            // Thêm lớp 'active' cho liên kết được click
            link.classList.add('active');
        });
    });
});


//-----------------------------PAUSE AND PLAY BUTTON------------------------
document.addEventListener("DOMContentLoaded", function () {
    var pauseRunButton = document.querySelector('.btn_pause_run');
    var pauseIcon = pauseRunButton.querySelector('.fa-circle-pause');
    var playIcon = pauseRunButton.querySelector('.fa-circle-play');
    
    pauseRunButton.addEventListener("click", function () {
        // Toggle between pause and play icons
        var isPaused = pauseIcon.style.display !== "none";
        
        if (isPaused) {
            pauseIcon.style.display = "none";
            playIcon.style.display = "inline-block";
            // Add logic for playing here
            console.log("Playing");
        } else {
            pauseIcon.style.display = "inline-block";
            playIcon.style.display = "none";
            // Add logic for pausing here
            console.log("Paused");
        }
    });
});



// ------------------------------PROGRESS BAR------------------------------
document.addEventListener("DOMContentLoaded", function () {
    var progressBar = document.getElementById('myProgressBar');

    progressBar.addEventListener('click', function (e) {
        var percent = (e.offsetX / this.clientWidth) * 100;
        progressBar.value = percent;
        // Add logic to seek to the desired position in your music player
        console.log('Seek to ' + percent.toFixed(2));
    });
});


// ----------------------------- TIME BOX ---------------------------------

// chua kip sua gi ca

// ----------------------------- HIDE HEADER AND FOOTER ---------------------------------
let timeoutId;

function hideHeaderFooter() {
    document.querySelector('header').classList.add('hidden');
    document.querySelector('footer').classList.add('hidden');
}

function showHeaderFooter() {
    document.querySelector('header').classList.remove('hidden');
    document.querySelector('footer').classList.remove('hidden');
}

function resetTimeout() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => hideHeaderFooter(), 3000); // 3000 milliseconds (3 seconds)
}

document.addEventListener('mousemove', () => {
    showHeaderFooter();
    resetTimeout();
});

document.addEventListener('keydown', () => {
    showHeaderFooter();
    resetTimeout();
});

document.addEventListener('scroll', () => {
    showHeaderFooter();
    resetTimeout();
});
// hideHeaderFooter();

// -------------------- FULL SCREEN ----------------------------
function toggleFullscreen() {
    const wrapper = document.querySelector('.wrapper');
    const dummyButton = document.createElement('button');

    dummyButton.style.width = '1px';
    dummyButton.style.height = '1px';

    if (!document.fullscreenElement) {
        wrapper.classList.add('fullscreen');
        document.body.appendChild(dummyButton);

        dummyButton.addEventListener('click', () => {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        });

        dummyButton.click();
    } else {
        document.exitFullscreen();
        wrapper.classList.remove('fullscreen');
    }
}








        