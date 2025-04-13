//Crear un objeto que represente una agenda de contactos. Cada contacto debe tener nombre, teléfono y email. Implementa funciones para: agregar un nuevo contacto, buscar un contacto por nombre, eliminar un contacto.
const agenda = {
  contactos: [],

  agregarContacto(contacto) {
    this.contactos.push(contacto);
  },

  buscarContacto(nombre) {
    return this.contactos.find((c) => c.nombre === nombre);
  },

  eliminarContacto(nombre) {
    this.contactos = this.contactos.filter((c) => c.nombre !== nombre);
  },
};

//Pruebas
agenda.agregarContacto({
  nombre: "Ana",
  telefono: "123456",
  email: "ana@mail.com",
});
console.log(agenda.buscarContacto("Ana"));
agenda.eliminarContacto("Ana");
