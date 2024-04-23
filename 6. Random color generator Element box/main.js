
let grid_container = document.querySelector('.grid-container');


function box_generator(parents) {
    for (let i = 0; i < 30; i++) {
        let div = document.createElement('div');
        let ramCr = rendomColor()
        div.className = 'grid-item';
        div.innerText = `#${ramCr}`;
        div.style.backgroundColor = `#${ramCr}`;
        
        parents.appendChild(div)
    }
}

function rendomColor() {
    let I_think = '123456789abcdef';

    let random_Code_Generator = '';    

    for (let i = 0; i < 6; i++) {
        let one_time = Math.floor(Math.random() * I_think.length)

        random_Code_Generator += I_think.substring(one_time, one_time + 1)
    }
    console.log(random_Code_Generator);
    return random_Code_Generator ;
}



box_generator(grid_container)



