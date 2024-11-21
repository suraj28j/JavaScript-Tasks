const users = document.querySelector('.users');
let data = [];

const getData = async () => {
    try {
        const res = await fetch(`https://api.github.com/users`);
        data = await res.json();
        displayData(data);
    } catch (error) {
        console.log(error);
    }
}
getData();

const displayData = (data) => {
    // console.log(data);
    users.innerHTML = '';
    data.forEach((item) => {
        const div = document.createElement('div');
        div.setAttribute("id", "card")
        div.innerHTML = `
        <img src = "${item.avatar_url}" alt = ${item.login}/>
        <div>
            <h2>${item.login}</h2>
            <p><a href = "${item.html_url}">${item.html_url}</a></p>
        </div>
        `
        users.appendChild(div);
    })
}




const debounce = (func, wait) => {
    let timerId;
    return (e) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => func(e), wait)
    }
}

const callAPI = (e) => {
    let filterData;
    let inputData = e.target.value
    console.log(inputData);
    filterData = data.filter((item) => {
        return item.login.includes(inputData);
    })
    displayData(filterData);
}

const debounceCallAPI = debounce(callAPI, 500);

const input = document.querySelector("input");
input.addEventListener('input', debounceCallAPI)



// Normal Search //

// input.addEventListener('input', (e) => {
    // let filterData;
//     let inputData = e.target.value
//     console.log(inputData);
//     filterData = data.filter((item) => {
//         return item.login.includes(inputData);
//     })
//     displayData(filterData);
// })
