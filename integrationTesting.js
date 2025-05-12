//Ejemplo: Probar la integración entre una ruta de Express y una base de datos simulada.
// app.js
const express = require("express");
const app = express();
app.use(express.json());

app.post("/users", (req, res) => {
  const user = req.body;
  // Simular guardado en base de datos
  res.status(201).json({ id: 1, ...user });
});

module.exports = app;

// app.test.js
const request = require("supertest");
const app = require("./app");

test("crear un nuevo usuario", async () => {
  const response = await request(app).post("/users").send({ name: "Juan" });
  expect(response.statusCode).toBe(201);
  expect(response.body.name).toBe("Juan");
});
