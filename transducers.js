//Ejercicio: Aplicar un transducer que combina map y filter
const map = (fn) => (reducer) => (acc, val) => reducer(acc, fn(val));
const filter = (pred) => (reducer) => (acc, val) =>
  pred(val) ? reducer(acc, val) : acc;

const transduce = (transducer, reducer, init, arr) =>
  arr.reduce(transducer(reducer), init);

// transducer compuesto
const doblarYFiltrarPares = compose(
  filter((x) => x % 2 === 0),
  map((x) => x * 2)
);

// pruebo
const resultado = transduce(
  doblarYFiltrarPares,
  (acc, val) => [...acc, val],
  [],
  [1, 2, 3, 4]
);
console.log(resultado); // [4, 8]
