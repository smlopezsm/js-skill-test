//Ejemplo: Probar una función que suma dos números.

// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// sum.test.js
const sum = require("./sum");

test("suma de 2 + 3 debe ser 5", () => {
  expect(sum(2, 3)).toBe(5);
});
