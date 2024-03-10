


const botones = document.querySelectorAll('button')

for (let boton of botones) {
    boton.addEventListener('click', cargarColor)
}
function cargarColor(event) {
    const body = document.body;
    body.style.backgroundColor = "tomato";
}