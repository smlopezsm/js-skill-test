//Ejercicio: Búsqueda lineal
function busquedaLineal(arr, objetivo) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === objetivo) return i;
  }
  return -1;
}

console.log(busquedaLineal([10, 20, 30], 20)); // 1

//Ejercicio: Búsqueda binaria (array ordenado)
function busquedaBinaria(arr, objetivo) {
  let inicio = 0,
    fin = arr.length - 1;

  while (inicio <= fin) {
    const medio = Math.floor((inicio + fin) / 2);

    if (arr[medio] === objetivo) return medio;
    if (arr[medio] < objetivo) inicio = medio + 1;
    else fin = medio - 1;
  }

  return -1;
}

console.log(busquedaBinaria([1, 3, 5, 7, 9], 5)); // 2
