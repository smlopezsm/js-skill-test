//Ejemplo: Evitar el uso excesivo de mocks en pruebas.
// servicio.js
class Servicio {
  constructor(api) {
    this.api = api;
  }

  async obtenerDatos() {
    return await this.api.fetchData();
  }
}

// servicio.test.js
const Servicio = require("./servicio");

test("obtenerDatos devuelve datos reales", async () => {
  const apiReal = {
    fetchData: async () => ["dato1", "dato2"],
  };
  const servicio = new Servicio(apiReal);
  const datos = await servicio.obtenerDatos();
  expect(datos).toEqual(["dato1", "dato2"]);
});
