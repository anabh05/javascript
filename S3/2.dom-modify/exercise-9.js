
const divEspeciales = document.querySelectorAll(".fn-insert-here")
divEspeciales.forEach(divEspecial => {
    const parrafo = document.createElement('p');
    parrafo.textContent = 'Voy dentro!';
    divEspecial.appendChild(parrafo)

})


