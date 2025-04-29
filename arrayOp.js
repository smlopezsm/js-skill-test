//Ejercicio: Procesar una lista de usuarios
const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 17 },
  { nombre: "María", edad: 30 },
];

// Filtrar mayores de edad
const mayores = usuarios.filter((u) => u.edad >= 18);

// Mapear solo nombres
const nombres = mayores.map((u) => u.nombre);

// Reducir para contar total de edades
const sumaEdades = mayores.reduce((acc, u) => acc + u.edad, 0);

console.log(mayores);
console.log(nombres);
console.log("Suma de edades:", sumaEdades);
