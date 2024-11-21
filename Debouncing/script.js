const users = document.querySelector('.users');
let data;

const getData = async () => {
    try {
        const res = await fetch(`https://api.github.com/users`);
        data = await res.json();
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
        // console.log(result);
    } catch (error) {
        console.log(error);
    }
}

getData();


const input = document.querySelector("input");
input.addEventListener('input', (e) => {
    let inputData = e.target.value
    // console.log(inputData);
    data = data.filter((item) => {
        return item.login === inputData
    })
    getData();
})