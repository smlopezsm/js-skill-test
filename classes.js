//Usando class, crear una clase Usuario con nombre y email. Luego crear una clase Admin que extienda de Usuario y agregar un método para borrar usuarios (solo simulado en consola).
class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }

  mostrarInfo() {
    return `${this.nombre} (${this.email})`;
  }
}

class Admin extends Usuario {
  constructor(nombre, email) {
    super(nombre, email);
  }

  borrarUsuario(usuario) {
    console.log(`Usuario ${usuario.nombre} eliminado.`);
  }
}

//Pruebas
const user = new Usuario("Lautaro", "lautaro@mail.com");
const admin = new Admin("Admin", "admin@mail.com");

console.log(user.mostrarInfo());
admin.borrarUsuario(user);
