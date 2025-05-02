//Ejercicio: Orden de ejecución con setTimeout y promesas
console.log("Inicio");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promesa resuelta");
});

console.log("Fin");

// Resultado esperado:
// Inicio
// Fin
// Promesa resuelta
// setTimeout
