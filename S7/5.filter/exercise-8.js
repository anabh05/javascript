
function filterStreamers(keyword) {
  return streamers.filter(streamer => streamer.name.toLowerCase().includes(keyword.toLowerCase()));
}

// Obtener referencias a los elementos HTML
const input = document.querySelector('input[data-function="toFilterStreamers"]');
const button = document.querySelector('button[data-function="toShowFilterStreamers"]');

// Agregar evento click al botón
button.addEventListener('click', function() {
  // Obtener el valor del input
  const keyword = input.value;

  // Filtrar los streamers
  const filteredStreamers = filterStreamers(keyword);

  // Mostrar los resultados en la consola
  console.log(filteredStreamers);
});