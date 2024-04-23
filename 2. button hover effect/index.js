

const btn = document.querySelector('button[type="button"]');



btn.addEventListener('mouseover', function (e) {
    let x = e.pageX - this.offsetLeft;
    let y = e.pageY - this.offsetTop;

    btn.style.setProperty('--x', x+'px');
    btn.style.setProperty('--y', y+'px');
})


