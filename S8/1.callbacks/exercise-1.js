const numbersList = [];

function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function father(a, b, callback) {
    const resultado = callback(a, b);
    numbersList.push(resultado)
}


father(4, 5, sum)
father(10, 5, substract)

console.log(numbersList)