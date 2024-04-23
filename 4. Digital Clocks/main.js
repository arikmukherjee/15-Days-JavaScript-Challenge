

let hours = document.querySelector('.box .hours')
let minutes = document.querySelector('.box .minutes')
let seconds = document.querySelector('.box .seconds')
let am_pm = document.querySelector('.contant .day')


function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let amPm = 'AM'

    if (h > 12) {
        h = h - 12;
        amPm = 'PM'
    }

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    am_pm.innerText = amPm;

    setTimeout(() => {
        updateClock()
    }, 1000);
}

updateClock()

