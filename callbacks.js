//Ejercicio: Callback después de una operación simulada
function hacerTarea(nombre, callback) {
  console.log(`Iniciando tarea: ${nombre}`);
  setTimeout(() => {
    console.log(`Completada: ${nombre}`);
    callback();
  }, 1000);
}

hacerTarea("Leer archivo", () => console.log("Tarea finalizada"));
