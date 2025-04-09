// 1.Crea una función que devuelva otra función que sume un número fijo.
function crearSumador(fijo) {
  return function (n) {
    return n + fijo;
  };
}
const sumar5 = crearSumador(5);
console.log(sumar5(10)); //15

// 2.Implementa un contador que recuerde su valor entre llamadas usando closures.
function crearContador() {
  let conteo = 0;
  return function () {
    conteo++;
    return conteo;
  };
}
const contador = crearContador();
console.log(contador()); //1
console.log(contador()); //2
console.log(contador()); //3

// 3.Haz una función que reciba un nombre y devuelva otra que lo salude.
function saludar(nombre) {
  return function () {
    console.log(`Hola ${nombre}`);
  };
}
const saludarSantiago = saludar("Santiago");
saludarSantiago(); //Hola Santiago

// 4.Crea un closure que simule una caja fuerte: solo puede accederse a un valor si se pasa la contraseña correcta.
function crearSeguro(secreto, password) {
  return function (ingresado) {
    if (ingresado === password) {
      return `El secreto es: ${secreto}`;
    } else {
      return "Contraseña incorrecta";
    }
  };
}
const seguro = crearSeguro("pizza secreta", "1234");
console.log(seguro("1234")); //El secreto es: pizza secreta
console.log(seguro("0000")); //Contraseña incorrecta

// 5.Explica qué sucede si intentas modificar una variable cerrada dentro del closure. Prueba mutarla y retornar su valor.
function modificar() {
  let numero = 10;
  return {
    get: () => numero,
    incrementar: () => numero++,
    set: (n) => (numero = n),
  };
}
const mod = modificar();
console.log(mod.get()); //10
mod.incrementar();
console.log(mod.get()); //11
mod.set(42);
console.log(mod.get()); //42
