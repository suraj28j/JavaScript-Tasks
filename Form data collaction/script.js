// Method 1

// let form = document.querySelector('form');
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     let name = e.target.name.value;
//     let email = e.target.email.value;
//     let phone = e.target.phone.value;
//     let date = e.target.date.value;
//     let course = e.target.course.value;

//     console.log(name, email, phone, date, course);
// })



// Method 2

let userInfo = {
    name: undefined,
    email: undefined,
    phone: undefined,
    date: undefined,
    course: undefined
}

// let select = document.querySelector('select')
// let input = document.querySelectorAll('input'); // NodeList

// [input[0], input[1], input[2], input[3], select].forEach((input) => {
//     input.addEventListener('input', (e) => {
//         userInfo[e.target.id] = e.target.value
//         console.log(userInfo);
//     })
// })



// Method 3 (Inline JS)

function getInfo(element) {
    userInfo[element.id] = element.value;
    console.log(userInfo);
}
