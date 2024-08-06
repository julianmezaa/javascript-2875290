/* let nombre = 'jose'
let items = ['uno', 'dos', 'tres',]
let pelicula = {
    id: 5,
        nombre: "Smells Like Teen Spirit",
        artista: "Nirvana",
        año: 1991,
        genero: "Grunge",
}
function agregarStorange (key, value){
    if(typeof value === 'string'){
        localStorage.setItem(key, value)
    }else{
        localStorage.setItem(key,JSON.stringify(value))
    }
}

agregarStorange('nombre', nombre)
agregarStorange('carrito', items)
agregarStorange('pelicula', pelicula)

function obtenerDatos(){
    let nombreUsuario =  localStorage.getItem('nombre')
    let carritoUsuario = JSON.parse(localStorage.getItem('carrito'))
    let peliculatoUsuario = JSON.parse(localStorage.getItem('pelicula'))

    console.log(carritoUsuario, typeof carritoUsuario)

    carritoUsuario.forEach(item => {
      console.log(item)
    });
}

obtenerDatos()

function borrarItem (item){
    localStorage.removeItem(item)
}

/* borrarItem('nombre')
borrarItem('pelicula')
borrarItem('carrito') */

/* function borrarTodo(){
    localStorage.clear()
}
borrarTodo() */

const Username = document.querySelector("#Username");
const Password = document.querySelector("#Password");
const formulario = document.querySelector("#formulario");


//inicio de sesion

function validarUsuario (e){
    e.preventDefault();

    let currentUser = JSON.parse(localStorage.getItem("user"));
    console.log(currentUser.userN);
    console.log(currentUser.userP);

console.log(Boolean(Username.value === currentUser.userN));
console.log(Boolean(Password.value === currentUser.userP));

if (Username.value === currentUser.userN && Password.value === currentUser.userP){
    console.log("Felicidades puedes entrar 🔥")
    window.location = "./userpage.html"
}else {
    console.log("Sigue intentando")
}

formulario.reset()
}

formulario.addEventListener("submit", validarUsuario)

formulario.addEventListener("submit", validarUsuario)
