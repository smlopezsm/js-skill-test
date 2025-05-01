//Ejercicio: Implementar una pila (stack)
class Stack {
  constructor() {
    this.items = [];
  }

  push(elem) {
    this.items.push(elem);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

const pila = new Stack();
pila.push(10);
pila.push(20);
console.log(pila.pop()); // 20

//Ejercicio: Implementar una cola (queue)
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(elem) {
    this.items.push(elem);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }
}

const cola = new Queue();
cola.enqueue(1);
cola.enqueue(2);
console.log(cola.dequeue()); // 1
