//Ejercicio: Encapsular llamada asíncrona en try/catch
async function obtenerYProcesar(id) {
  try {
    const data = await fetchDatos(id);
    console.log("Procesando:", data);
  } catch (e) {
    console.error("Error capturado:", e);
  } finally {
    console.log("Operación finalizada");
  }
}

obtenerYProcesar(-1);
