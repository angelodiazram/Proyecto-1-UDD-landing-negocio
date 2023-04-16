
//? PROGRAMACIÓN PARA BARRA DE NAVEGACIÓN DESPLEGABLE

const btnSandwitch = document.querySelector('#sandwitch');
const nav          = document.querySelector('#nav-header');
          
btnSandwitch.addEventListener('click', ()=>{
    nav.classList.toggle('visible');
})