// 1.Escribe una función que demuestre la diferencia entre var, let y const dentro de bloques.
function scope() {
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
  console.log(a); //(var tiene ámbito de función)
  // console.log(b); Error (let tiene ámbito de bloque)
  // console.log(c); Error (const tiene ámbito de bloque)
}
testScope();

// 2.Muestra cómo var se eleva (hoisting) dentro de una función, pero let y const no.Ejemplo:¿Qué pasa con esto? console.log(a); var a = 10;
console.log(x); // undefined (hoisting de var)
var x = 5;

console.log(y); // Error (let no se eleva)
let y = 10;

console.log(z); // Error (const no se eleva)
const z = 15;

// 3.Crea una función que intente acceder a una variable antes de ser declarada.Prueba con var, let y const.
function hoisting() {
  console.log(hola); // undefined
  var hola = "hola";

  console.log(chau); // error (Cannot access 'chau' before initialization)
  let chau = "chau";
}
hoisting();

// 4.Demuestra cómo una función anidada accede a variables de su ámbito externo.
function externa() {
  const mensaje = "Hola desde afuera";

  function interna() {
    console.log(mensaje); //puede acceder a "mensaje"
  }
  interna();
}
externa();

// 5.Usa una función dentro de un bloque if y explica qué variables son accesibles dentro y fuera.
if (true) {
  var varInside = "soy var";
  let letInside = "soy let";

  function funcInside() {
    return "función en bloque";
  }

  console.log(varInside); // Correcto
  console.log(letInside); // Correcto
  console.log(funcInside()); // Correcto
}

console.log(varInside); // Correcto
// console.log(letInside); Error
// console.log(funcInside()); Error en modo estricto
