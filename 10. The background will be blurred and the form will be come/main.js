
const join_btn = document.querySelector('.join-btn')
const email_form = document.querySelector('.popup-container')
const body = document.querySelector('body')
const close_form = document.querySelector('.popup-container div')

// -- join btn hover effect -- \\
join_btn.addEventListener('mouseover', function (e) {
    let x = e.offsetX;
    let y = e.offsetY;

    this.style.setProperty('--x_position', x + 'px')
    this.style.setProperty('--y_position', y + 'px')
})

// -- join btn this button will open the form -- \\
join_btn.addEventListener('click' , function (e) {
    this.parentNode.style.display = 'none';
    email_form.style.display = 'block';
    email_form.classList.add('active')
    email_form.classList.remove('active-out')
    body.style.backdropFilter = 'blur(4px)';
})

// -- form close and back home page -- \\
close_form.addEventListener('click' , function (e) {
    email_form.classList.remove('active')
    email_form.classList.add('active-out')


    setTimeout(() => {
        join_btn.parentNode.style.display = 'block';
        email_form.style.display = 'none';
        body.style.backdropFilter = 'blur(0)';
    }, 490);
})