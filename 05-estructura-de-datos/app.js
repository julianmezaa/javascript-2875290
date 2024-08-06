const container = document.querySelector( '.container')

canciones.forEach(element => {
    let card = document.createElement('div');

card .innerHTML = ` 
<seletion class="tarjeta">
<div class="container">
<img src="${element.imagen}"
<div class="name"> ${element.nombre}<div>
<div class="artista"> ${element.artista}<div>
<div class="año"> año: ${element.año}<div>
<div class="genero"> genero: ${element.genero}<div>
</div>
</seletion>
`
container.appendChild(card);
});