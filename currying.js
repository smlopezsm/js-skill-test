//Transformar una función sumar(a, b, c) en su versión curried, es decir, una función que toma un argumento a la vez.
function sumar(a, b, c) {
  return a + b + c;
}

function curriedSumar(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sumar(1, 2, 3)); // 6
console.log(curriedSumar(1)(2)(3)); // 6
