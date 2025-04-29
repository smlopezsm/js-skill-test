//hacer un bubble sort, un quick sort y un merge sort
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Intercambio
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 2]));

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const menores = arr.filter((x) => x < pivot);
  const iguales = arr.filter((x) => x === pivot);
  const mayores = arr.filter((x) => x > pivot);

  return [...quickSort(menores), ...iguales, ...quickSort(mayores)];
}

console.log(quickSort([5, 3, 8, 4, 2]));

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mitad = Math.floor(arr.length / 2);
  const izquierda = mergeSort(arr.slice(0, mitad));
  const derecha = mergeSort(arr.slice(mitad));

  return merge(izquierda, derecha);
}

function merge(izq, der) {
  let resultado = [];
  while (izq.length && der.length) {
    if (izq[0] < der[0]) {
      resultado.push(izq.shift());
    } else {
      resultado.push(der.shift());
    }
  }
  return resultado.concat(izq, der);
}

console.log(mergeSort([5, 3, 8, 4, 2]));
