const titulo = document.querySelector('.titulo');
const luna = document.querySelector('.luna');
const sonrisa = document.querySelector('.sonrisa');
const alicia = document.querySelector(".alicia ");
const loco = document.querySelector(".loco");
const conejo = document.querySelector(".conejo");
const moverUno = document.querySelector(".moverUno");
const moverDos = document.querySelector(".moverDos");

function mover(){
    titulo.style.animationName = "titulo"
    luna.style.animationName = "luna"
    sonrisa.style.animationName = "sonrisa"
    alicia.style.animationName = "alicia"
    loco.style.animationName = "loco"
    conejo.style.animationName = "conejo"
   moverUno.style.animationName = "moverUno"
    moverDos.style.animationName = "moverDos"
}

btn.addEventListener("click", mover);