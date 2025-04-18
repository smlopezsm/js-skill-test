//Crear un contenedor Caja que permita aplicar .map() sobre su valor interno, como si fuera un array o un Promise.
class Caja {
  constructor(val) {
    this.val = val;
  }

  map(fn) {
    return new Caja(fn(this.val));
  }

  toString() {
    return `Caja(${this.val})`;
  }
}

const res = new Caja(5).map((x) => x + 3).map((x) => x * 2);

console.log(res.toString()); // Caja(16)
