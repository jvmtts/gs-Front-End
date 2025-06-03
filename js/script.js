const form = document.getElementById('alert-form');
const message = document.querySelector('.form-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = form.email.value.trim();
    const estado = form.estado.value;

    if (!email || !estado) {
        message.textContent = 'Por favor, preencha todos os campos.';
        message.style.color = 'red';
    } else {
        message.textContent = 'Obrigado! Você receberá nossos alertas em breve.';
        message.style.color = 'green';
        form.reset();
    }
});
    const navbar = document.querySelector('.nav-links');
    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '&#9776;';
    document.querySelector('.navbar').appendChild(hamburger);

    hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

    function toggleMenuDisplay() {
  if (window.innerWidth <= 768) {
    hamburger.style.display = 'block';
    navbar.style.display = navbar.classList.contains('active') ? 'block' : 'none';
  } else {
    hamburger.style.display = 'none';
    navbar.style.display = 'flex';
    navbar.classList.remove('active');
  }
}
    toggleMenuDisplay();
    window.addEventListener('resize', toggleMenuDisplay);