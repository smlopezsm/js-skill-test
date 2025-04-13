//En lugar de herencia, compón un personaje combinando funcionalidades (como atacar, volar, nadar, etc.) mediante funciones reutilizables.

const puedeAtacar = (nombre) => ({
  atacar: () => console.log(`${nombre} ataca con fuerza!`),
});

const puedeVolar = (nombre) => ({
  volar: () => console.log(`${nombre} está volando.`),
});

const puedeNadar = (nombre) => ({
  nadar: () => console.log(`${nombre} está nadando.`),
});

function crearPersonaje(nombre) {
  return {
    nombre,
    ...puedeAtacar(nombre),
    ...puedeVolar(nombre),
  };
}

const dragon = crearPersonaje("Dragón");
dragon.atacar();
dragon.volar();
// dragon.nadar(); No nada porque no se le compuso esa habilidad

const pez = {
  nombre: "Pez",
  ...puedeNadar("Pez"),
};
pez.nadar();
