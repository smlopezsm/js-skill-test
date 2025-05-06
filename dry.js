//Evitar duplicación en validación de campos:
//Codigo repetido
if (!email.includes("@")) {
  throw new Error("Email inválido");
}

if (!username.length) {
  throw new Error("Nombre de usuario requerido");
}

//Codigo limpio
function validarCampo(valor, mensaje, condicion) {
  if (condicion(valor)) {
    throw new Error(mensaje);
  }
}

validarCampo(email, "Email inválido", (v) => !v.includes("@"));
validarCampo(username, "Nombre de usuario requerido", (v) => !v.length);
