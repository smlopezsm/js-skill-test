//Ejercicio: Implementar una lista enlazada simple con inserción y recorrido
class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null;
  }
}

class ListaEnlazada {
  constructor() {
    this.cabeza = null;
  }

  agregar(valor) {
    const nuevo = new Nodo(valor);
    if (!this.cabeza) {
      this.cabeza = nuevo;
    } else {
      let actual = this.cabeza;
      while (actual.siguiente) {
        actual = actual.siguiente;
      }
      actual.siguiente = nuevo;
    }
  }

  imprimir() {
    let actual = this.cabeza;
    while (actual) {
      console.log(actual.valor);
      actual = actual.siguiente;
    }
  }
}

const lista = new ListaEnlazada();
lista.agregar("A");
lista.agregar("B");
lista.agregar("C");
lista.imprimir(); // A B C
