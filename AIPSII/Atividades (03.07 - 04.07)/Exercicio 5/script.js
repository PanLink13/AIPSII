function ordenarNumeros(lista) {
  return lista.sort((a, b) => a - b);
}

const numeros = prompt("Digite uma lista de números separados por vírgula:");
const numerosArray = numeros.split(",").map((numero) => Number(numero));
const numerosOrdenados = ordenarNumeros(numerosArray);

alert("Os números ordenados são: " + numerosOrdenados);