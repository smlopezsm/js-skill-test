// 1.This en objetos
const persona = {
  nombre: "Ana",
  saludar: function () {
    console.log(`Hola, soy ${this.nombre}`);
  },
};

persona.saludar(); //Que imprime?
//Imprime: Hola, soy Ana

//Función externa
function mostrarNombre() {
  console.log(`Mi nombre es ${this.nombre}`);
}

const usuario = {
  nombre: "Lucía",
  saludar: mostrarNombre, //Asigno la función externa como método
};

usuario.saludar(); // ¿Qué muestra?
//Imprime: Mi nombre es Lucía

//This en funciones normales vs flecha
function Persona(nombre) {
  this.nombre = nombre;

  setTimeout(function () {
    console.log("Normal:", this.nombre);
  }, 1000);

  setTimeout(() => {
    console.log("Flecha:", this.nombre);
  }, 1000);
}

const p1 = new Persona("Carlos");

//Normal: undefined
//Flecha: Carlos
