// random value generator
let num1 = Math.ceil(Math.random() * 10)
let num2 = Math.ceil(Math.random() * 10)
let total = num1 * num2;

//reference html to js link
let question = document.querySelector('.question')
let score_output = document.querySelector('.score-output')
let form = document.querySelector('form')

question.innerHTML = `What is ${num1} multiply by ${num2}`


let score = JSON.parse(localStorage.getItem('score'))
if(!score) {
    score = 0;
}

if(score === 0) {
    score_output.style.color = 'red';
} else if (score < 0) {
    score_output.style.backgroundColor = 'red';
    score_output.style.padding = '5px';
} else {
    score_output.style.color = 'green';    
}

score_output.innerHTML = score ;


form.addEventListener('submit', function (e) {
    // e.preventDefault()
    let inputValue = +e.target.elements[0].value;

    if(!inputValue) {
        alert('please the current answer')
    }

    if (total === inputValue) {
        score++;

        update_Storege()
    } else {
        score--;

        update_Storege()
    }
    
    
    
    
    e.target.elements[0].value = '';
    
})

function update_Storege() {
    localStorage.setItem('score', JSON.stringify(score))
}