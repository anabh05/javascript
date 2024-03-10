const streamers = [{ name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' }, { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' }, { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' }, { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }];



const input = document.querySelector('input');
input.addEventListener('focus', recogerDatos); //Cuando hago click en el elemento


// El elemento que lanza el evento me trae informacion? Si => Usar element.target
function recogerDatos(event) {
    console.log(event.target.value) // Target.value del input

}


 let streamersSeleccionados = streamers.filter(stream => stream.name.includes(recogerDatos))
// streamersSeleccionados.forEach(stream => { stream.name = input })

console.log(streamersSeleccionados)



const recogerDatos = (event) => {
  console.log(event);
  const  streamersSeleccionados = streamers.filter((streamer) =>
    streamer.name.includes(event.target.value())
  );

  console.log( streamersSeleccionados);
};

const input$$ = document.querySelector('[data-function="toFilterStreamers"]');
// const input$$ = document.querySelector('input');

input$$.addEventListener("input", handleChange);