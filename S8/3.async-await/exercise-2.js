const url = 'https://rickandmortyapi.com/api/character/';

async function cargarDatos(endPoint) {

    const response = await fetch(endPoint, { method: 'GET' })
    const data = await response.json()
    console.log(data)


}


cargarDatos(url)