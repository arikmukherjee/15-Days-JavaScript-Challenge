

let round_container = document.querySelector('.round-container')
let full = document.querySelector('.round-slider')
let point = document.querySelector('.middle-point')
let input_count_show = document.querySelector('.input-box p')

let range = document.querySelector('#sk');

range.addEventListener('input', function () {
    console.log(this.value);

    input_count_show.innerText = this.value
    point.style.transform = `translate(-50%, -50%) rotate(${this.value}deg)`;

    if (this.value === '360') {
        round_container.classList.add('full');
    } else {
        round_container.classList.remove('full');
    }
})