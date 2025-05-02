//Ejercicio: Ver las fases de una promesa
const promesa = new Promise((resolve, reject) => {
  console.log("Estado: pendiente");
  setTimeout(() => {
    Math.random() > 0.5 ? resolve("Cumplida") : reject("Rechazada");
  }, 1000);
});

promesa
  .then((valor) => console.log("Éxito:", valor))
  .catch((error) => console.error("Error:", error));
