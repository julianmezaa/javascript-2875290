//barra desplegable
const mySidenav = document.querySelector("#mySidenav")
const barra = document.querySelector(".barra")
function openNav() {
  mySidenav.style.width = "250px";
}

function closeNav() {
  mySidenav.style.width = "0";
}

barra.addEventListener("click", openNav)


//sugerencia
const sugerencia = document.querySelector(".sugerencia")
const btnSugerencia = document.querySelector(".btn-sugerencia")
const borrarSugerencia = document.querySelector(".x")
const formularioS = document.querySelector("#formulario-S")
const Nombre = document.querySelector("#Nombre");
const Mensaje = document.querySelector("#Mensaje");
const CorreoS = document.querySelector("#Correo-S");

//enlace
function enviarSugerencia() {
    if (sugerencia.style.display === "none") {
      sugerencia.style.display = "block";
    } else {
      sugerencia.style.display = "none";
    }
  }

  //la X
function cerrarSugerencia(){
    sugerencia.style.display = "none";
}

btnSugerencia.addEventListener("click", enviarSugerencia)
borrarSugerencia.addEventListener("click", enviarSugerencia)

//guardar mensaje
function registrarSugerencia(e){
  e.preventDefault();
    let sugerencias = {
        userNombre: Nombre.value,
        userCorreo: CorreoS.value,
        userMensaje: Mensaje.value,
    }
    localStorage.setItem("sugerencias", JSON.stringify(sugerencias));
        window.location = "./index.html"
}

formularioS.addEventListener("submit",registrarSugerencia)


//saludo
const saludo = document.querySelector(".saludo");

let nombreUser = JSON.parse(localStorage.getItem("user"));

saludo.innerHTML = `Hola ${nombreUser.userN}`