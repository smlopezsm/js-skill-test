//Crear una función constructora Vehiculo con propiedades marca y año. Luego, crea una función Carro que herede de Vehiculo y agregue modelo. Usa prototipos para métodos compartidos.

function Vehiculo(marca, año) {
  this.marca = marca;
  this.año = año;
}

Vehiculo.prototype.getInfo = function () {
  return `${this.marca} - ${this.año}`;
};

function Carro(marca, año, modelo) {
  Vehiculo.call(this, marca, año);
  this.modelo = modelo;
}

Carro.prototype = Object.create(Vehiculo.prototype);
Carro.prototype.constructor = Carro;

Carro.prototype.getModelo = function () {
  return `${this.getInfo()} - ${this.modelo}`;
};

//Pruebas
const miCarro = new Carro("Toyota", 2020, "Corolla");
console.log(miCarro.getModelo());
