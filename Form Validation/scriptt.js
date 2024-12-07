let usernameErr = document.querySelector("#usernameErr");
let emailErr = document.querySelector("#emailErr");
let phoneErr = document.querySelector("#phoneErr");
let passwordErr = document.querySelector("#passwordErr");
let form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let username = e.target.username.value;
    let email = e.target.email.value;
    let phone = e.target.phone.value;
    let password = e.target.password.value;

    // Function for checking validation
    function checkUsername() {
        let pattern = /[a-zA-Z]{3,20}/
        return pattern.test(username);
    }
    function checkEmail() {
        let pattern = /^([a-zA-Z0-9\.]{4,20})@([a-zA-Z0-9\.]{3,20}).([a-z]{3,10})$/
        return pattern.test(email);
    }
    function checkPhone() {
        let pattern = /^[6-9][0-9]{9}$/
        return pattern.test(phone);
    }
    function checkPassword() {
        let pattern = /[\w]{8,20}/
        return pattern.test(password);
    }


    if (checkUsername()) {
        console.log(username);
        usernameErr.style.visibility = 'hidden';
    } else {
        usernameErr.innerText = "Invalid Name";
        usernameErr.style.visibility = 'visible'
    }

    if (checkEmail()) {
        console.log(email);
        emailErr.style.visibility = 'hidden';
    } else {
        emailErr.innerText = "Invalid Email";
        emailErr.style.visibility = 'visible'
    }

    if (checkPhone()) {
        console.log(phone);
        phoneErr.style.visibility = 'hidden';
    } else {
        phoneErr.innerText = "Invalid Phone Number";
        phoneErr.style.visibility = 'visible'
    }

    if (checkPassword()) {
        console.log(password);
        passwordErr.style.visibility = 'hidden';
    } else {
        passwordErr.innerText = "Invalid Password";
        passwordErr.style.visibility = 'visible'
    }

})