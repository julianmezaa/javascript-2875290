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
    window.location = "./vistas/userpage.html"
}else {
    console.log("Sigue intentando")
}

formulario.reset()
}

formulario.addEventListener("submit", validarUsuario)