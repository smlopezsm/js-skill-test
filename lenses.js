//Ejercicio: Usar un lente para leer y modificar datos inmutables
const lensProp = (key) => ({
  get: (obj) => obj[key],
  set: (val) => (obj) => ({ ...obj, [key]: val }),
});

const user = { name: "Santiago", age: 21 };
const ageLens = lensProp("age");
const edad = ageLens.get(user); // 21

// Escribo sin mutar el original
const nuevoUsuario = ageLens.set(31)(user); // { name: "Santiago", age: 31 }

console.log(user); // { name: "Santiago", age: 21 }
console.log(nuevoUsuario); // { name: "Santiago", age: 31 }
