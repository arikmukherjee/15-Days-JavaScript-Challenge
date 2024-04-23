const generator_btn = document.querySelector('#Generator');
const copy_btn = document.querySelector('#copy');
const output_text = document.querySelector('.output-color-code p')
const output_color = document.querySelector('.output-color')


generator_btn.addEventListener('click', function () {
   let store_color =  generator_random_hax_color()
   output_text.innerHTML = store_color;
    output_color.style.backgroundColor = store_color;
})

copy_btn.addEventListener('click' , function () {
    navigator.clipboard.writeText(output_text.innerText);

    let p = document.createElement('p')
    p.innerText = 'coped';

    generator_btn.parentNode.appendChild(p)

    setTimeout(() => {
        generator_btn.parentNode.appendChild(p).remove()
    }, 1000);
    
})



function generator_random_hax_color() {
    let random_text_array = '123456789abcdef'.split('')

    let generator_code = '#'

    for (let i = 0; i < 6; i++) {
        let random_number_generat = Math.floor(Math.random() * random_text_array.length)
        generator_code += random_text_array[random_number_generat]
    }

    return generator_code
}





function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }