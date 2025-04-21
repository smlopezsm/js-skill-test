//Ejercicio: Contar palabras únicas en un texto usando Set y Map
const texto = "hola mundo hola javascript mundo mundo";

// arreglo de palabras
const palabras = texto.split(" ");

// set: palabras únicas
const unicas = new Set(palabras);
console.log("Palabras únicas:", [...unicas]); // ['hola', 'mundo', 'javascript']

// map: conteo de ocurrencias
const conteo = new Map();
palabras.forEach((palabra) => {
  conteo.set(palabra, (conteo.get(palabra) || 0) + 1);
});
console.log("Conteo de palabras:", Object.fromEntries(conteo));
