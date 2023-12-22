const contenedor=document.querySelector("#cortes");
let seleccion=document.querySelectorAll(".imagen");
const btnIz=document.querySelector("#izquierda");
const btnDr=document.querySelector("#derecha");
function movD(){
    let seleccionIni=document.querySelectorAll(".imagen")[0];
    contenedor.style.marginLeft="-100%";
    contenedor.style.transition="all 0.5s";
    setTimeout(function(){
        contenedor.style.transition="none";
        contenedor.insertAdjacentElement("beforeend",seleccionIni);
        contenedor.style.marginLeft="-50%";
    },500);
}
function movI(){
    let seleccion=document.querySelectorAll(".imagen");
    let seleccionFin=seleccion[seleccion.length-1];
    contenedor.style.marginLeft="0";
    contenedor.style.transition="all 0.5s";
    setTimeout(function(){
        contenedor.style.transition="none";
        contenedor.insertAdjacentElement("afterbegin",seleccionFin);
        contenedor.style.marginLeft="-50%"; 
    },500);
}

btnDr.addEventListener('click',function(){
    movD();
});
btnIz.addEventListener('click',function(){
    movI();
});
