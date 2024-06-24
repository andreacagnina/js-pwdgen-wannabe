let first_name = prompt('Quale è il tuo nome?');
let last_name = prompt('Quale è il tuo cognome?');
let color = prompt('Quale è il tuo colore preferito?');

let password_gen = `${first_name}${last_name}${color}23`;

document.getElementById('password').innerHTML = `Tieni al sicuro la tua nuova password: <span class="fw-bold"> ${password_gen}</span>`;

// // COPIATO DA BOOTSTRAP E MODIFICATO
// const alertPlaceholder = document.getElementById('password')
// const appendAlert = (message, type) => {
//     const wrapper = document.createElement('div')
//     wrapper.innerHTML = [
//         `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//         `   <div>${message}</div>`,
//         '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//         '</div>'
//     ].join('')

//     alertPlaceholder.append(wrapper)
// }

// const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//     alertTrigger.addEventListener('click', () => {
//         appendAlert(`Tieni al sicuro la tua nuova password: ${password_gen}`, 'warning')
//     })
// }