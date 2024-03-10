//Usa un foin para imprimir por consola los datos del alienigena.

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}


for (const datos in alien) {
    console.log(`${datos}: ${alien[datos]}`)
}