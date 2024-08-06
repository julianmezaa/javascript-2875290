const cuadro = document.querySelector('#cuadro');
const pelota = document.querySelector('#circulo');
const btnMover = document.querySelector('#btnMover');

let e = 0;

function mover() {
    if (e == 0) {

        pelota.style.marginLeft = '1655px';
        pelota.style.backgroundColor = cuadro.value;
        pelota.style.transitionDuration = '.10s';
        e = 1;
    } 
    else {

        pelota.style.marginLeft = '0px';
        pelota.style.backgroundColor = 'black';
        pelota.style.transitionDuration = '.10s';
        e = 0;
    }
}



btnMover.addEventListener('click', mover)