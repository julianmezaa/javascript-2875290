//menu hamburguesa
const mySidenav = document.querySelector("#mySidenav")
const barra = document.querySelector(".barra")
function openNav() {
  mySidenav.style.width = "250px";
}

function closeNav() {
  mySidenav.style.width = "0";
}

barra.addEventListener("click", openNav)

//mostrar sugerencia
const sugerencia = document.querySelector(".sugerencia")
const btnSugerencia = document.querySelector(".btn-sugerencia")
const borrarSugerencia = document.querySelector(".x")
const formularioS = document.querySelector("#formulario-S")
const Nombre = document.querySelector("#Nombre");
const Mensaje = document.querySelector("#Mensaje");
const CorreoS = document.querySelector("#Correo-S");

//para el boton sugerencia
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

//guardar información
function registrarSugerencia(e){
  e.preventDefault();
    let sugerencias = {
        userNombre: Nombre.value,
        userCorreo: CorreoS.value,
        userMensaje: Mensaje.value,
    }
    localStorage.setItem("sugerencias", JSON.stringify(sugerencias));
        window.location = "./evidencias.html"
}

formularioS.addEventListener("submit",registrarSugerencia)
btnSugerencia.addEventListener("click", enviarSugerencia)
borrarSugerencia.addEventListener("click", enviarSugerencia)


//saludo
const saludo = document.querySelector(".saludo");

let nombreUser = JSON.parse(localStorage.getItem("user"));

saludo.innerHTML = `Hola ${nombreUser.userN}`