// Redireccionar al hacer clic en el botón "Sí"
const botonSi = document.querySelector('.si');
botonSi.addEventListener('click', function() {
  window.location.href = 'felicitaciones.html';
});

// Efecto de serpentinas al cargar la página de felicitaciones
window.addEventListener('load', function() {
  const serpentinas = document.createElement('div');
  serpentinas.classList.add('serpentinas'); 