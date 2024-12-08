let usernameErr = document.querySelector("#usernameErr");
let emailErr = document.querySelector("#emailErr");
let phoneErr = document.querySelector("#phoneErr");
let passwordErr = document.querySelector("#passwordErr");
let cpasswordErr = document.querySelector("#cpasswordErr");
let form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let username = e.target.username.value;
    let email = e.target.email.value;
    let phone = e.target.phone.value;
    let password = e.target.password.value;
    let cpassword = e.target.cpassword.value;

    let isValid = true;

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
        usernameErr.style.visibility = 'visible';
        isValid = false;
    }

    if (checkEmail()) {
        console.log(email);
        emailErr.style.visibility = 'hidden';
    } else {
        emailErr.innerText = "Invalid Email";
        emailErr.style.visibility = 'visible';
        isValid = false;
    }

    if (checkPhone()) {
        console.log(phone);
        phoneErr.style.visibility = 'hidden';
    } else {
        phoneErr.innerText = "Invalid Phone Number";
        phoneErr.style.visibility = 'visible';
        isValid = false;
    }

    if (checkPassword()) {
        console.log(password);
        passwordErr.style.visibility = 'hidden';
    } else {
        passwordErr.innerText = "Invalid Password";
        passwordErr.style.visibility = 'visible';
        isValid = false;
    }

    if (password === cpassword) {
        console.log(cpassword);
        cpasswordErr.style.visibility = 'hidden';
    } else {
        cpasswordErr.innerText = "Password Mismatch";
        cpasswordErr.style.visibility = 'visible';
        isValid = false;
    }

    if (isValid) {
        let credentials = {
            username,
            email,
            phone,
            password
        }
        let successMesssage = document.querySelector("#successMesssage");
        sessionStorage.setItem("info",JSON.stringify(credentials));
        successMesssage.style.visibility = 'visible';
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
    }

})