
//script para navbar
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
     M.Sidenav.init(elems);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });


  //para carrusel
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.carousel').carousel();
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.slider').slider();
  });

  
  // modal contacteme
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.modal').modal();
  });


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });

  // 2. JavaScript: Detecta el scroll y cambia la clase
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('miNavbar');
  // Puedes ajustar el número '100' para cambiar la clase en cualquier otro punto del scroll
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


function ObtenerDatos(e){
  e.preventDefault()
  const form = document.getElementById('Formulario');

  let nombre = document.getElementById('nombre').value.trim();
  let tel = document.getElementById('tel').value.trim();
  let Msm = document.getElementById('Msm').value.trim();

  alert("Mensaje enviado Gracias Pronto me comunicare 👍")
  console.log('mensaje enviado Datos ingresados', nombre,tel,Msm)

  form.reset();
}


document.getElementById('btnDescargar').addEventListener('click', function() {
    // Ruta del archivo dentro de tu proyecto
    const url = 'files/CV_ Jeison.pdf';  

    // Crear un enlace temporal para descargar
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV_Jeisson_Osorio.pdf'; // Nombre con el que se descargará
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

//  const toggleBtn = document.getElementById('theme-toggle');
//   const body = document.body;

//   // Cargar tema guardado (si el usuario ya cambió antes)
//   if (localStorage.getItem('theme') === 'dark') {
//     body.classList.add('dark-mode');
//     toggleBtn.textContent = '☀️';
//   }

//   toggleBtn.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');

//     const isDark = body.classList.contains('dark-mode');
//     toggleBtn.textContent = isDark ? '☀️' : '🌙';

//     // Guardar preferencia
//     localStorage.setItem('theme', isDark ? 'dark' : 'light');
//   });

const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;
  const sky = document.querySelector('.sky');

  // Cargar tema guardado
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️';
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Generar estrellas fugaces aleatorias solo en modo oscuro
  function createShootingStar() {
    if (!body.classList.contains('dark-mode')) return;

    const star = document.createElement('div');
    star.classList.add('shooting-star');

    // Posición aleatoria en el cielo
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';

    sky.appendChild(star);

    // Eliminar la estrella después de la animación
    setTimeout(() => {
      star.remove();
    }, 1500);
  }

  // Cada 1–3 segundos, aparece una estrella fugaz
  setInterval(() => {
    if (body.classList.contains('dark-mode')) {
      createShootingStar();
    }
  }, 1500 + Math.random() * 1500);