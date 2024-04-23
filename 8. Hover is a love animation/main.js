

let output_div = document.querySelector('.output');

output_div.addEventListener('mousemove', function (e) {
    let x_position = e.offsetX;
    let y_position = e.offsetY;

    let span = document.createElement('span');
    span.style.left = x_position + 'px';
    span.style.top = y_position + 'px';

    let random_size = Math.random() * 50;
    span.style.height = random_size + 'px';
    span.style.width = random_size + 'px';

    setTimeout(() => {
        span.remove()
    }, 3000);

    this.appendChild(span)
})