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


//aparecer y desaparecer sugerencia
const sugerencia = document.querySelector(".sugerencia")
const btnSugerencia = document.querySelector(".btn-sugerencia")
const borrarSugerencia = document.querySelector(".x")
const formularioS = document.querySelector("#formulario-S")
const Nombre = document.querySelector("#Nombre");
const Mensaje = document.querySelector("#Mensaje");
const CorreoS = document.querySelector("#Correo-S");

//boton sugerencia
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

//guardar la informacion
function registrarSugerencia(e){
  e.preventDefault();
    let sugerencias = {
        userNombre: Nombre.value,
        userCorreo: CorreoS.value,
        userMensaje: Mensaje.value,
    }
    localStorage.setItem("sugerencias", JSON.stringify(sugerencias));
        window.location = "./contenido.html"
}

formularioS.addEventListener("submit",registrarSugerencia)
btnSugerencia.addEventListener("click", enviarSugerencia)
borrarSugerencia.addEventListener("click", enviarSugerencia)


//contenido
const box = document.querySelector(".box2")

function mostrarResults (Modulos){
  Modulos.forEach(element => {
    //container principal
    let container2 = document.createElement('div')
    container2.classList.add("container2")
    box.appendChild(container2);
    
    //boton/titulo
    let boton = document.createElement('button')
    boton.classList.add("accordion")
    boton.innerHTML=
    `${element.nombre} 
    <i class="fa-solid fa-angle-down"></i>`
    container2.appendChild(boton)
    
    //contenido de modulos
  let modulo = document.createElement("div")
  modulo.classList.add("container3")
  box.appendChild(modulo)


  //video modulo
  let panel = document.createElement("div")
  panel.classList.add("panel")
  panel.innerHTML= 
  `${element.video} `
  modulo.appendChild(panel)
  
  //link PDF
  let link = document.createElement("div")
  link.classList.add("link")
  link.innerHTML= 
  `<a href="${element.link}" class="desca">PDF Descargable</a> `
  modulo.appendChild(link)
  
  //mostrar modulos
  function mostraModulo() {
    if (modulo.style.display === "none") {
      modulo.style.display = "flex";
     } else {
       modulo.style.display = "none";
      }
    }
    boton.addEventListener("click", mostraModulo)
  })

  
  
}
mostrarResults(Modulos)



//Saludo 
const saludo = document.querySelector(".saludo");

let nombreUser = JSON.parse(localStorage.getItem("user"));

saludo.innerHTML = `Hola ${nombreUser.userN}`


