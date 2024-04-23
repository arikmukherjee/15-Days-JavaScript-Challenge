
const form = document.querySelector('form');
const output = document.querySelector('#output ul');

// form \\
form.addEventListener('submit', function (e) {
    e.preventDefault()


    let input_value = this.input_text_box.value.trim();

    if (input_value === '') {
        alert(`plase enter your today's work`)
    } else {
        let li = document.createElement('li');
        li.className = 'flex justify-between items-center border-b-[2px] p-4'
        li.innerHTML = `<span class="capitalize cursor-pointer">${input_value}</span>
        <span>
            <i class="fa-regular fa-square-check mx-2 text-md text-gray-400 hover:bg-green-400 hover:text-white"></i>
            <i class="fa-solid fa-trash text-red-400 hover:text-red-500 cursor-pointer"></i>
        </span>`


        output.appendChild(li)
    }


    this.reset()
})


// output result \\
output.addEventListener('click', function (e) {
    if (e.target.localName == 'span') {
        e.target.classList.add('line-through')
    } else if (e.target.classList.contains('fa-square-check')) {
        e.target.parentNode.previousElementSibling.classList.add('line-through')
        e.target.classList.remove('fa-square-check')
        e.target.classList.add('fa-circle-xmark')
        console.log(e.target.parentNode.previousElementSibling);
    } else if (e.target.classList.contains('fa-circle-xmark')) {
        e.target.parentNode.previousElementSibling.classList.remove('line-through')
        e.target.classList.remove('fa-circle-xmark')
        e.target.classList.add('fa-square-check')
    }

    if (e.target.classList.contains('fa-trash')) {
        e.target.parentNode.parentNode.remove()
    }
})




