const boxTarea= document.querySelector('#boxTarea');
const input = document.querySelector('#cuadro');
const btnAgregar = document.querySelector('#btnAgregar');
const btnEliminar = document.querySelector('#btnEliminar');
const main = document.querySelector('#main')

function agregar(){
    const tarea = document.createElement('div');
    tarea.classList.add('nota');
    tarea.innerText = input.value;
    main.appendChild(tarea);
    input.value = "";
    
/*     const tach = document.createElement('button');
    tach.innerHTML = ''
 */

    const equis = document.createElement('button');
    equis.innerHTML ='X';
    equis.classList.add('equis');
    tarea.appendChild(equis);
}
function tacharElemet(e){
    e.target.style.textDecoration = "line-through"
}
function borrarElemento ( e ){
    
    if(e.target.innerText == 'X'){

        main.removeChild(e.target.parentElement);
    }
}
function borrar(){
    main.innerHTML = ' ';
    n=1;
}


btnAgregar.addEventListener('click',agregar)
main.addEventListener('click',tacharElemet)
main.addEventListener('click', borrarElemento)
main.addEventListener('click', borrar)