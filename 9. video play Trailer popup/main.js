
let play_btn = document.querySelector('button[type="button"]')
let img_video = document.querySelector('.img-area')
let close_video = document.querySelector('.icon');

// -- -- \\
let video = img_video.lastElementChild;
let img = img_video.firstElementChild;
let icon_btn = img_video.previousElementSibling;



play_btn.addEventListener('click', function () {

    video.style.display = 'block';
    img.style.display = 'none';
    icon_btn.style.display = 'block';
    video.play()

    this.classList.add('extra')
    this.innerText = 'playing'
})

close_video.addEventListener('click', function () {

    video.style.display = 'none';
    img.style.display = 'block';
    icon_btn.style.display = 'none';
    play_btn.classList.remove('extra')
    play_btn.innerText = 'Watch Now';

    video.pause()
    video.currentTime = 0;

    this.style.display = 'none'
})

