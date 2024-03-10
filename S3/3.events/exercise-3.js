const input = document.querySelector('input');
input.addEventListener('input', recogerDatos); //Cuando hago click en el elemento


// El elemento que lanza el evento me trae informacion? Si => Usar element.target
function recogerDatos(event) {
    console.log(event.target.value) // Target.value del input

}
