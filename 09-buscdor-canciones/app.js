const container = document.querySelector('.container')
const buscador = document.querySelector("#buscador")
const textoBusqueda = document.querySelector("#textoBuscador")
const listaGenero = document.querySelector("#listaGenero")
const listaCantantes = document.querySelector("#listaCantantes")



function mostrarResults (Musica){
Musica.forEach(element => {
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

}

mostrarResults(Musica)

function filtrar (e){
    e.preventDefault()
    container.innerHTML = ""

    let filtro = Musica
  
    if(listaGenero.value !== "All"){
     filtro = filtro.filter(Musica => Musica.genero.toLowerCase() == listaGenero.value.toLowerCase());

    }
    
    if(textoBuscador.value){
      filtro = filtro.filter(Musica => Musica.nombre.toLowerCase().includes(textoBusqueda.value.toLowerCase()));
    }

    mostrarResults(filtro) 
}

buscador.addEventListener("submit", filtrar)
