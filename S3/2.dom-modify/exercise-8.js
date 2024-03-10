const divSegundo = document.querySelector('div:last-child');
const body = document.body;

const parrafo = document.createElement('p');
parrafo.textContent = 'Voy en medio!';
body.insertBefore(parrafo, divSegundo);
