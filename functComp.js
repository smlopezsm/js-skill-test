//Componer varias funciones pequeñas en una única función compleja que limpie y normalice un string.
const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
const replaceSpaces = (str) => str.replace(/\s+/g, "-");

const limpiarString = (str) => replaceSpaces(toLowerCase(trim(str)));

console.log(limpiarString("  Hola que ondaa  ")); // "hola-que-ondaa"
