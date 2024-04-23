
// random data set
const upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWYZ';
const lowerSet = 'abcdefghijklmnopqrstuvwyz';
const numberSet = '1234567890';
const SymbleSet = '!@#$%^&*()_-+';

// Element Selector
const password_show = document.querySelector('#pass_show');
const header = document.querySelector('.header');
const copy_btn = document.querySelector('#copy-btn');
const passwordLength = document.querySelector('#password_length');
const upperCase = document.querySelector('#toggle_btn');
const lowerCase = document.querySelector('#toggle_btn-1');
const number = document.querySelector('#toggle_btn-2');
const symble = document.querySelector('#toggle_btn-3');
const generat_btn = document.querySelector('#Generate-Password');


// random data return
function getRandomData(dataSet) {
    return dataSet[(Math.floor(Math.random() * dataSet.length))]
}

// get passwerd generator
function getPasswordGenerator(passwerd = '') {

    if (upperCase.checked) {
        passwerd += getRandomData(upperSet);
    }

    if (lowerCase.checked) {
        passwerd += getRandomData(lowerSet);
    }

    if (number.checked) {
        passwerd += getRandomData(numberSet);
    }

    if (symble.checked) {
        passwerd += getRandomData(SymbleSet);
    }

    if (passwerd.length < passwordLength.value) {
        return getPasswordGenerator(passwerd);
    }


    password_show.value = truncate_string(passwerd, passwordLength.value)


}

function truncate_string(str, num) {
    if (str.length > num) {
        let sub_str = str.substring(0, num)
        return sub_str
    } else {
        return str
    }
}

// generat password event
generat_btn.addEventListener('click', function () {

    if (upperCase.checked || lowerCase.checked || number.checked || symble.checked) {
        console.log('xx');
        getPasswordGenerator()
    } else {
        alert('Please Select Any Content')
    }

    if (passwordLength.value == 0 || passwordLength.value == '') {
        alert('look your password length is 0')
    }

})

// copy button event
copy_btn.addEventListener('click', function () {   
    if (!password_show.value == '') {
        generator_copy_message()
        navigator.clipboard.writeText(password_show.value)
    } else {
        alert('Nothing to Copy')
    }
})

function generator_copy_message() {
    let p = document.createElement('p');
    p.innerText = 'copy';
    header.appendChild(p)

    p.classList.add('copy_message_show')

    document.addEventListener('animationend', function () {
        p.classList.remove('copy_message_show')
        p.remove()
    })
}