//Dado un arreglo de productos con precio, usar funciones de orden superior (hof) para quedarte solo con los productos caros y aplicarles un descuento.
const productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Monitor", precio: 300 },
];

const aplicarDescuento = (descuento) => (producto) => ({
  ...producto,
  precio: producto.precio * (1 - descuento),
});

const productosCarosConDescuento = productos
  .filter((p) => p.precio > 100)
  .map(aplicarDescuento(0.1));
//filtro y aplico el descuento
console.log(productosCarosConDescuento);
