//Escribir una función pura que devuelva el precio final con el impuesto incluido. No debe modificar variables externas ni depender de nada fuera de sus parámetros.

function calcularTotalConImpuesto(precio, impuesto) {
  return precio + precio * impuesto;
}

// Siempre devuelverá lo mismo cuando le pasemos los mismos argumentos:
console.log(calcularTotalConImpuesto(100, 0.21)); // 121
console.log(calcularTotalConImpuesto(100, 0.21)); // 121
