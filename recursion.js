//Ejercicio: Calcular el factorial de un número recursivamente
function factorial(n) {
  if (n === 0) return 1; // Caso base
  return n * factorial(n - 1); // Paso recursivo
}

console.log(factorial(5)); // 120
