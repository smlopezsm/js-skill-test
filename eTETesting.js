//Ejemplo: Simular el flujo completo de un usuario en una aplicación web.

// e2e.test.js
const puppeteer = require("puppeteer");

test("el usuario puede registrarse", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/register");
  await page.type("#username", "usuario");
  await page.type("#password", "contraseña");
  await page.click("#submit");
  await page.waitForSelector("#welcome");
  const welcomeText = await page.$eval("#welcome", (el) => el.textContent);
  expect(welcomeText).toContain("Bienvenido");
  await browser.close();
});
