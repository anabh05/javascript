const cities = [{ isVisited: true, name: 'Tokyo' },
{ isVisited: false, name: 'Madagascar' },
{ isVisited: true, name: 'Amsterdam' },
{ isVisited: false, name: 'Seul' }];


for (let city of cities) {
    if (city.isVisited === true) {
        city.name = city.name + "Visitado"
    }
}

console.log(cities);