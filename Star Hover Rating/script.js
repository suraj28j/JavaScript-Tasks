let inputs = document.querySelectorAll('input');
let btn = document.querySelector('button');

let collact_data = document.querySelector(".collact_data");

btn.addEventListener('click', () => {
    for (let input of inputs) {
        if (input.checked) {
            // console.log(input.value);
            collact_data.innerHTML = `<h3>Current raitng ${input.value}</h3>`
        }
    }
})