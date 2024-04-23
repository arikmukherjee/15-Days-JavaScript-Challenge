

let text_box = document.getElementById('textarea')
let charaters_counter = document.querySelector('.charaters-count')
let remaining = document.querySelector('.remaining')




text_box.addEventListener('keyup', function (e) {
    updateCounter()
})


function updateCounter() {
    let increas_count = text_box.value.length;
    charaters_counter.innerText = `Total Charaters: ${increas_count}`

    let decrease_count = text_box.getAttribute('maxlength')

    remaining.innerText = `Remaining: ${decrease_count - increas_count}`
}