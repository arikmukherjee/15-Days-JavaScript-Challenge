


/*
    implementation ruls here

    1. window y bora bor scroll count korte hove

    2. navbar er niche koto tuku niye ami ekta action nibo ta dekhbo ar oi-khane jodi kono element thake take select korbo DOM er sahajje

    3. navbar er niche div ba elemnt koto tuku niche ache top theke ta dekhte hove

    4. oi div jodi kono margin ba paddin thake ta dekhte hove

*/




let navbar = document.querySelector('.nav-bar')
let main_container = document.querySelector('.main-container')




window.addEventListener('scroll', function (e) {
    if (window.scrollY > main_container.offsetTop - navbar.offsetHeight - 50) {
        navbar.classList.add ('active')
    } else {
        navbar.classList.remove ('active')
    }

})

