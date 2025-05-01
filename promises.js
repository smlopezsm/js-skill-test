//Ejercicio: Simular promesa con éxito y error
function fetchDatos(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      id > 0 ? resolve(`Datos del ID ${id}`) : reject("ID inválido");
    }, 1000);
  });
}

fetchDatos(1)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
