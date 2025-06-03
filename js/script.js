const form = document.getElementById('alert-form');
const message = document.querySelector('.form-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = form.email.value.trim();
    const estado = form.estado.value;

    if (email === '' || estado === '') {
        message.textContent = 'Por favor, preencha todos os campos.';
        message.style.color = 'red';
    } else {
        message.textContent = 'Obrigado! Você receberá nossos alertas em breve.';
        message.style.color = 'green';
        form.reset();
    }
});
