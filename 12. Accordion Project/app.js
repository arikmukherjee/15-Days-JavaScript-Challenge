

const item_all = document.querySelectorAll('.acc-item');

item_all.forEach((item) => {
    let title = item.querySelector('.acc-title')

    title.addEventListener('click', function () {

        for (let i = 0; i < item_all.length; i++) {
            if (item_all[i] != item) {
                item_all[i].classList.remove('is_show')
            } else {
                item.classList.toggle('is_show')
            }

        }

    })
})

