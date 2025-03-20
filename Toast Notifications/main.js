let toastDiv = document.querySelector('.toasts')

let success = `<i class="fa-solid fa-circle-check"></i> This Promt was successful`
let warning = `<i class="fa-solid fa-triangle-exclamation"></i> This Promt was warning`
let error = `<i class="fa-solid fa-circle-exclamation"></i> This Promt was error`

function showAlert(msg) {

    let toast = document.createElement('div')
    toast.setAttribute('class', 'toast');
    toast.innerHTML = msg;

    
    if (msg.includes(warning)) {
        toast.setAttribute('class', 'toast warning')
    }
    if (msg.includes(error)) {
        toast.setAttribute('class', 'toast error')
    }

    toastDiv.appendChild(toast);

    setTimeout(() => {
        toast.remove()
    }, 4900)
}