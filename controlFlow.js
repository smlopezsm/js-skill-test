//1. Crear un array de objetos, cada uno con nombre (string) y nota (number)
const estudiantes = [
  { nombre: "Ana", nota: 9 },
  { nombre: "Luis", nota: 4 },
  { nombre: "María", nota: 10 },
  { nombre: "Juan", nota: 7 },
  { nombre: "Sofía", nota: 5 },
];

//Inicializo contadores para aprobados y reprobados
let aprobados = 0;
let reprobados = 0;

//2. Recorro el array con un bucle for
for (let i = 0; i < estudiantes.length; i++) {
  const estudiante = estudiantes[i];

  //3a. Mostrar nombre y nota
  console.log(`\nNombre: ${estudiante.nombre}`);
  console.log(`Nota: ${estudiante.nota}`);

  //3b. Usar if para saber si aprobó (nota >= 6)
  if (estudiante.nota >= 6) {
    console.log("Aprobado");
    aprobados++;
  } else {
    console.log("Reprobado");
    reprobados++;
  }

  //3c. Usar switch para clasificar la nota
  switch (estudiante.nota) {
    case 10:
      console.log("Clasificación: Excelente");
      break;
    case 9:
      console.log("Clasificación: Muy bien");
      break;
    case 8:
    case 7:
      console.log("Clasificación: Bien");
      break;
    case 6:
      console.log("Clasificación: Aprobado");
      break;
    default:
      console.log("Clasificación: Reprobado");
      break;
  }
}

//4. Mostrar cuántos aprobaron y cuántos no
console.log(`\nTotal de aprobados: ${aprobados}`);
console.log(`Total de reprobados: ${reprobados}`);

//5. Mostrar el tipo de variable para nota, nombre y el array general
console.log(`\nTipo de nombre: ${typeof estudiantes[0].nombre}`); // string
console.log(`Tipo de nota: ${typeof estudiantes[0].nota}`); // number
console.log(
  `Tipo de array general: ${
    Array.isArray(estudiantes) ? "array" : typeof estudiantes
  }`
); // array
