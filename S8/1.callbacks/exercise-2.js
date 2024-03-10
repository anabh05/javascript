const userAnwsers = [];

function confirmExample(description) {
  const resultado = confirm(description);
  return resultado;
}

function promptExample(description) {
  const resutlado = propmt();
  return resultado;
}

function father(description, callback) {
  const resultado = callback(description);
  userAnwsers.push(result);
}



father("¿Vas a clase?", confirmExample);
father("¿Estudias programacion", promptExample);

console.log(userAnwsers);