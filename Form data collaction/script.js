let userInfo = {
    name: undefined,
    email: undefined,
    phone: undefined,
    date: undefined,
    course: undefined
}

let select = document.querySelector('select')
let input = document.querySelectorAll('input'); // NodeList

[input[0], input[1], input[2], input[3], select].forEach((input) => {
    input.addEventListener('input', (e) => {
        userInfo[e.target.id] = e.target.value
        console.log(userInfo);
    })
})


// Inline JS

// function getInfo(element) {
//     userInfo[element.id] = element.value;
//     console.log(userInfo);
// }
