//Ejercicio: Reescribir promesa anterior con async/await
async function mostrarDatos(id) {
  try {
    const datos = await fetchDatos(id);
    console.log(datos);
  } catch (error) {
    console.error("Error:", error);
  }
}

mostrarDatos(1);
