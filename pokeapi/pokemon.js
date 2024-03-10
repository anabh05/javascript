// Llamar a la API y recogerlo en una variable
const pokeUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

// Hacer la funcion para coger los datos
async function cargarPokemon(endpoint) {
    
    const response = await fetch(endpoint, { method: 'GET' })
    const data = await response.json() // traduce la peticion en los 151 pokemons con name y url
    // console.log(data.results) // recibe el objeto de los pokemons
   
    for (let pokeData of data.results) { // cada objeto del pokemon pero sin hacer la peticion
        const response = await fetch(pokeData.url) // array de pokedata en url
        const data = await response.json()
        //console.log(data) // info de objetos de cada pokemon 
        pintarUnPokemon(data) // envias a la funcion la info de la variable data
        const arrayPokemon = []
       
    }
} 
cargarPokemon(pokeUrl)

// Coger la section para pintar sobre ellas
const sectionPokemons = document.querySelector('.Pokemons')

async function pintarUnPokemon(pokemon) {
    const infoPokemon = pokemon

    const article = document.createElement('article')
    const figure = document.createElement('figure')
    const img = document.createElement('img')
    img.src = `${infoPokemon.sprites.other['official-artwork'].front_default}`
    img.alt = infoPokemon.name
    const h4 = document.createElement('h4')
    h4.textContent = infoPokemon.id
     const h3 = document.createElement('h3')
     h3.textContent = infoPokemon.name
     const p = document.createElement('p')
    p.textContent = `${infoPokemon.types[0].type.name}`
    
   

    
    
   if (infoPokemon.types[0].type.name === 'fire') {
        article.style.backgroundColor = 'tomato';
    }

    if (infoPokemon.types[0].type.name === 'grass') {
        article.style.backgroundColor = '#bdecb6';
    }

    if (infoPokemon.types[0].type.name === 'water') {
        article.style.backgroundColor = '#99C0E1';
    }

    if (infoPokemon.types[0].type.name === 'bug') {
        article.style.backgroundColor = '#C8D088';
    }

    if (infoPokemon.types[0].type.name === 'ground') {
    article.style.backgroundColor = '#C8A78C';
    }

    if (infoPokemon.types[0].type.name === 'poison') {
    article.style.backgroundColor = '#C89EE5';
    }

     if (infoPokemon.types[0].type.name === 'rock') {
    article.style.backgroundColor = '#D7D4C0';
    } 
    
     if (infoPokemon.types[0].type.name === 'electric') {
    article.style.backgroundColor = '#FCDF7F';
    } 
    
    if (infoPokemon.types[0].type.name === 'ghost') {
    article.style.backgroundColor = '#B79EB7';
    } 	

    if (infoPokemon.types[0].type.name === 'psychic') {
    article.style.backgroundColor = '#F69EBC';
    }

    if (infoPokemon.types[0].type.name === 'normal') {
    article.style.backgroundColor = '#CFCFCF';
    }

    if (infoPokemon.types[0].type.name === 'fairy') {
    article.style.backgroundColor = '#F69EBC';
    }

    if (infoPokemon.types[0].type.name === 'fighting') {
    article.style.backgroundColor = '#FFBF7F';
    }

    if (infoPokemon.types[0].type.name === 'dragon') {
    article.style.backgroundColor = '#A6AFF0';
    }

    if (infoPokemon.types[0].type.name === 'ice') {
    article.style.backgroundColor = '#9DE5ED';
    }


    figure.appendChild(img)
    article.append(figure, h4, h3, p)



    sectionPokemons.appendChild(article)
        
}    

    
const fuego = document.querySelector(".botonFuego")
  console.log(fuego)

fuego.addEventListener("click", function () {
    const pokemonElements = document.querySelectorAll('.Pokemons article');

    pokemonElements.forEach(article => {
         const typeElement = article.querySelector('p');
         const type = typeElement.textContent.toLowerCase();
        if (type === 'fire') {
              console.log(article.style.backgroundColor = '#ed1c24')
           
        }
    });
});


const planta = document.querySelector(".botonPlanta")
  console.log(planta)

planta.addEventListener("click", function () {
    const pokemonElements = document.querySelectorAll('.Pokemons article');

    pokemonElements.forEach(article => {
         const typeElement = article.querySelector('p');
         const type = typeElement.textContent.toLowerCase();
        if (type === 'grass') {
              console.log(article.style.backgroundColor = '#3DA224')
           
        }
    });
});


const agua = document.querySelector(".botonAgua")
  console.log(agua)

agua.addEventListener("click", function () {
    const pokemonElements = document.querySelectorAll('.Pokemons article');

    pokemonElements.forEach(article => {
         const typeElement = article.querySelector('p');
         const type = typeElement.textContent.toLowerCase();
        if (type === 'water') {
              console.log(article.style.backgroundColor = '#82BAF0')
           
        }
    });
});


const bicho = document.querySelector(".botonBicho")
  console.log(bicho)

bicho.addEventListener("click", function () {
    const pokemonElements = document.querySelectorAll('.Pokemons article');

    pokemonElements.forEach(article => {
         const typeElement = article.querySelector('p');
         const type = typeElement.textContent.toLowerCase();
        if (type === 'bug') {
              console.log(article.style.backgroundColor = '#92A212')
           
        }
    });
});


const tierra = document.querySelector(".botonTierra");
console.log(tierra)

tierra.addEventListener("click", function () {
    const pokemonElements = document.querySelectorAll('.Pokemons article');

    pokemonElements.forEach(article => {
         const typeElement = article.querySelector('p');
         const type = typeElement.textContent.toLowerCase();
        if (type === 'ground') {
              console.log(article.style.backgroundColor = '#92501B')
           
        }
    });
});


const hielo = document.querySelector(".botonHielo");
console.log(hielo)

hielo.addEventListener("click", function () {
    const pokemonElements = document.querySelectorAll('.Pokemons article');

    pokemonElements.forEach(article => {
         const typeElement = article.querySelector('p');
         const type = typeElement.textContent.toLowerCase();
        if (type === 'ice') {
              console.log(article.style.backgroundColor = '#3CCBDC')
           
        }
    });
});

const veneno = document.querySelector(".botonVeneno");
console.log(veneno)

veneno.addEventListener("click", function () {
    const pokemonElements = document.querySelectorAll('.Pokemons article');

    pokemonElements.forEach(article => {
         const typeElement = article.querySelector('p');
         const type = typeElement.textContent.toLowerCase();
        if (type === 'poison') {
              console.log(article.style.backgroundColor = '#923FCC')
           
        }
    });
});

const hada = document.querySelector(".botonHada");
console.log(hada)

hada.addEventListener("click", function () {
    const pokemonElements = document.querySelectorAll('.Pokemons article');

    pokemonElements.forEach(article => {
         const typeElement = article.querySelector('p');
         const type = typeElement.textContent.toLowerCase();
        if (type === 'fairy') {
              console.log(article.style.backgroundColor = '#EF71F0')
           
        }
    });
});

const fantasma = document.querySelector(".botonFantasma");
console.log(fantasma)

fantasma.addEventListener("click", function () {
    const pokemonElements = document.querySelectorAll('.Pokemons article');

    pokemonElements.forEach(article => {
         const typeElement = article.querySelector('p');
         const type = typeElement.textContent.toLowerCase();
        if (type === 'ghost') {
              console.log(article.style.backgroundColor = '#713F71')
           
        }
    });
});


const psiquico = document.querySelector(".botonPsiquico");
console.log(psiquico)

psiquico.addEventListener("click", function () {
    const pokemonElements = document.querySelectorAll('.Pokemons article');

    pokemonElements.forEach(article => {
         const typeElement = article.querySelector('p');
         const type = typeElement.textContent.toLowerCase();
        if (type === 'psychic') {
              console.log(article.style.backgroundColor = '#EF3F7A')
           
        }
    });
});


const electrico = document.querySelector(".botonElectrico");
console.log(electrico)

electrico.addEventListener("click", function () {
    const pokemonElements = document.querySelectorAll('.Pokemons article');

    pokemonElements.forEach(article => {
         const typeElement = article.querySelector('p');
         const type = typeElement.textContent.toLowerCase();
        if (type === 'electric') {
              console.log(article.style.backgroundColor = '#FAC100')
           
        }
    });
});


const lucha = document.querySelector(".botonLucha");
console.log(lucha)

lucha.addEventListener("click", function () {
    const pokemonElements = document.querySelectorAll('.Pokemons article');

    pokemonElements.forEach(article => {
         const typeElement = article.querySelector('p');
         const type = typeElement.textContent.toLowerCase();
        if (type === 'fighting') {
              console.log(article.style.backgroundColor = '#FF8100')
           
        }
    });
});


const normal = document.querySelector(".botonNormal");
console.log(normal)

normal.addEventListener("click", function () {
    const pokemonElements = document.querySelectorAll('.Pokemons article');

    pokemonElements.forEach(article => {
         const typeElement = article.querySelector('p');
         const type = typeElement.textContent.toLowerCase();
        if (type === 'normal') {
              console.log(article.style.backgroundColor = '#A0A0A0')
           
        }
    });
});

const dragon = document.querySelector(".botonDragon");
console.log(dragon)

dragon.addEventListener("click", function () {
    const pokemonElements = document.querySelectorAll('.Pokemons article');

    pokemonElements.forEach(article => {
         const typeElement = article.querySelector('p');
         const type = typeElement.textContent.toLowerCase();
        if (type === 'dragon') {
              console.log(article.style.backgroundColor = '#4F60E2')
           
        }
    });
});


const roca = document.querySelector(".botonRoca");
console.log(roca)

roca.addEventListener("click", function () {
    const pokemonElements = document.querySelectorAll('.Pokemons article');

    pokemonElements.forEach(article => {
         const typeElement = article.querySelector('p');
         const type = typeElement.textContent.toLowerCase();
        if (type === 'rock') {
              console.log(article.style.backgroundColor = '#B0AB82')
           
        }
    });
});







