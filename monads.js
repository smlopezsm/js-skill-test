//Ejercicio: Crear una mónada Maybe para manejar valores nulos/indefinidos
class Maybe {
  constructor(val) {
    this.val = val;
  }

  static of(val) {
    return new Maybe(val);
  }

  isNothing() {
    return this.val === null || this.val === undefined;
  }

  map(fn) {
    return this.isNothing() ? this : Maybe.of(fn(this.val));
  }

  getOrElse(valorDefault) {
    return this.isNothing() ? valorDefault : this.val;
  }
}

//Pruebo
const resultado = Maybe.of("hola")
  .map((x) => x.toUpperCase())
  .map((x) => null)
  .map((x) => x + "!");

console.log(resultado.getOrElse("valor default"));
