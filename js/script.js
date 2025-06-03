// Validação de formulário
const form = document.getElementById('alert-form');
const requiredFields = form.querySelectorAll('input[required], select[required]');
const formMessage = document.querySelector('.form-message');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let valid = true;
    formMessage.textContent = '';
    formMessage.style.color = 'red';

    requiredFields.forEach(field => {
        if (field.value.trim() === '') {
            valid = false;
            field.style.border = '2px solid red';
        } else {
            field.style.border = '2px solid var(--color-primary)';
        }
    });

    if (!valid) {
        formMessage.textContent = 'Por favor, preencha todos os campos obrigatórios.';
    } else {
        formMessage.textContent = 'Formulário enviado com sucesso!';
        formMessage.style.color = 'green';
        form.reset();
        requiredFields.forEach(field => {
            field.style.border = '1px solid #ccc';
        });
    }
});

// Menu hamburguer
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');


hamburger.addEventListener('click', () => {
hamburger.setAttribute('aria-expanded', navLinks.classList.contains('active'));
    navLinks.classList.toggle('active');
});
// Validação de formulário
const colorButtons = document.querySelectorAll('.color-theme');

colorButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.body.style.backgroundColor = button.dataset.color;
  });
});
document.body.style.backgroundColor = '#333333';
document.body.classList.add('dark');

