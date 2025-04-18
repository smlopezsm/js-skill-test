//A partir de un objeto usuario, crear una nueva versión con el nombre cambiado, sin modificar el original. Mostrar ambos objetos para verificar.
const usuario = {
  id: 1,
  nombre: "Santiago",
  edad: 30,
};

function actualizarNombre(usuario, nuevoNombre) {
  return {
    ...usuario,
    nombre: nuevoNombre,
  };
}

const usuarioActualizado = actualizarNombre(usuario, "Santi");

console.log(usuario); // Santiago
console.log(usuarioActualizado); // Santi
