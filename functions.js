// 1. Escribe una funcion que reciba un n y devuelva n^2.
function square(n) {
  return n * n;
}

// 2. Crea una funcion flecha que sume 2 numeros y devuelva el resultado.
const sum = (a, b) => {
  return a + b;
};

// 3.Declara una función que reciba un array de números y devuelva el mayor.
const mayor = (array) => {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

// 4.Implementa una función que reciba otra función como argumento y la ejecute.
const saludar = (nombre) => {
  console.log(`Hola ${nombre}`);
};

const ejecutar = (funcion) => {
  const nombre = prompt("Ingresa tu nombre: ");
  funcion(nombre);
};

ejecutar(saludar);

// 5.Crea una función anónima asignada a una variable que devuelva si un número es par.
const esPar = function (num) {
  return num % 2 === 0;
};
