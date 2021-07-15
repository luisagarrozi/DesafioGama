// Função do email
const form = document.getElementById('form');
    const button = document.getElementById('enviar');


    button.addEventListener('click', (event) => {
        event.preventDefault();
        let email = document.getElementById('email').value;

        let convertData = JSON.stringify(email);

        localStorage.setItem('lead', convertData);
    })