//try catch basico
try {
  const x = y + 2; // y no está definida
} catch (error) {
  console.log("Se produjo un error:", error.message);
} finally {
  console.log("Esto siempre se ejecuta");
}

// validacion de entrada de usuario
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}

try {
  const resultado = dividir(10, 0);
  console.log("Resultado:", resultado);
} catch (error) {
  console.error("Error:", error.message);
}
