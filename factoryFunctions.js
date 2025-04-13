//Crear una factory function crearUsuario que reciba un nombre y email y retorne un objeto con métodos para mostrar su info y cambiar su email.

function crearUsuario(nombre, email) {
  return {
    nombre,
    email,

    mostrarInfo() {
      return `${this.nombre} (${this.email})`;
    },

    cambiarEmail(nuevoEmail) {
      this.email = nuevoEmail;
    },
  };
}

// Pruebas
const usuario1 = crearUsuario("Santiago", "santi@mail.com");
console.log(usuario1.mostrarInfo());
usuario1.cambiarEmail("santi2025@mail.com");
console.log(usuario1.mostrarInfo());
