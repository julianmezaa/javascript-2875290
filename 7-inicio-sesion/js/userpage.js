const container = document.querySelector('.container');
const btn = document.querySelector(".btnCerrar");

canciones.forEach(element => {
let card = document.createElement('div')

card.innerHTML =
`   <div class="card">
        <img src='${element.imagen}' alt="Imagen de la tarjeta" class="card-imagen">
        <div class="card-contenido">
            <h2 class="card-titulo">${element.nombre}</h2>
            <p class="card-descripcion">${element.artista}</p>
            <p class="card-descripcion">${element.genero}</p>
            <p class="card-descripcion">${element.año}</p>
        </div>
    </div>
`
container.appendChild(card);
})

const saludo = document.querySelector(".saludo");

let nombreUser = JSON.parse(localStorage.getItem("user"));

saludo.innerHTML = `Hola ${nombreUser.userN}`

function cerrarSesion (){
window.location = "../vistas/cerrar.html"
}

btn.addEventListener("click",cerrarSesion)