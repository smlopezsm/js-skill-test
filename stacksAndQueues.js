//Ejercicio: Validar paréntesis balanceados con una pila (Stack)
function estaBalanceado(expresion) {
  const stack = [];
  for (let char of expresion) {
    if (char === "(") stack.push(char);
    if (char === ")") {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(estaBalanceado("(a + b)")); // true
console.log(estaBalanceado("((a + b)")); // false
console.log(estaBalanceado(")a + b(")); // false

//Simular una cola de tareas (Queue)
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const tareas = new Queue();
tareas.enqueue("tarea 1");
tareas.enqueue("tarea 2");
tareas.enqueue("tarea 3");

while (!tareas.isEmpty()) {
  console.log("Procesando:", tareas.dequeue());
}
