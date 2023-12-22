const open=document.getElementById("abrir");
const close=document.getElementById("cerrar");

open.addEventListener('click',function(){
    let panel=document.getElementById("nav-links");
    panel.style.right="0";
});
close.addEventListener('click',function(){
    let panel=document.getElementById("nav-links");
    panel.style.right="-200px";
})