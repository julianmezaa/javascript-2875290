const Username = document.querySelector("#Username");
const Password = document.querySelector("#Password");
const formulario = document.querySelector("#formulario");

function registrarUser(e){
    e.preventDefault();
    let user = {
        userN: Username.value,
        userP: Password.value,
    }

    localStorage.setItem("user", JSON.stringify(user));

    formulario.reset();
}

formulario.addEventListener('submit',registrarUser)




