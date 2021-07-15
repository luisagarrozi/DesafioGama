// Função do email
const button = document.getElementById('enviar');
const input = document.getElementById('email-input');

button.addEventListener('click', (event) => {
    event.preventDefault();

    localStorage.setItem('email', input.value);
})
