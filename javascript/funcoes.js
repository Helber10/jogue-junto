

const btnMenu = document.getElementById('btn-menu');
function toggleMenu() {
  if (Event.type === 'touchstart') Event.preventDefault;

  const nav = document.getElementById('nav');
  nav.classList.toggle('active');

}
btnMenu.addEventListener('click', toggleMenu);
btnMenu.addEventListener('touchstart', toggleMenu);

function tipoLogin() {
  //simula login
  const username = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (username === '@email' && password === '1234') {
   window.location.href = "esporte.html"
  }
  else {
    alert("Você não Esta logado");
  }
}