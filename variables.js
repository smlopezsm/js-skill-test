// 1. Declarar una variable "nombre" con tu nombre (string).
// 2. Declarar una variable "edad" con tu edad (number).
// 3. Declarar una variable "tieneMascota" y asignarle true o false (boolean).
// 4. Crear un objeto llamado "persona" que tenga las propiedades: nombre, edad y tieneMascota.
// 5. Crear un array llamado "coloresFavoritos" con al menos 3 strings.
// 6. Agregá el array "coloresFavoritos" como una propiedad dentro del objeto "persona".
// 7. Usá console.log y typeof para mostrar el tipo de las variables nombre, edad y tieneMascota.
// 8. Usá Array.isArray para verificar si "coloresFavoritos" es un array.
// 9. Mostrá en consola todo el objeto "persona".

/// Tu código acá abajo:
let nombre = "Santiago";
let edad = 21;
let tieneMascota = true;
let coloresFavoritos = ["rojo", "azul", "verde"];

let persona = {
  nombre: nombre,
  edad: edad,
  tieneMascota: tieneMascota,
  coloresFavoritos: coloresFavoritos,
};

console.log(typeof nombre); //string
console.log(typeof edad); //number
console.log(typeof tieneMascota); //boolean
console.log(Array.isArray(coloresFavoritos)); //true
console.log(persona); //{ nombre: 'Santiago', edad: 21, tieneMascota: true, coloresFavoritos: [ 'rojo', 'azul', 'verde' ] }
console.log(typeof persona); //object
