//Modelar un sistema bancario con cuentas. Una Cuenta tiene métodos para depositar y retirar dinero. Luego creaar dos tipos de cuentas: CuentaAhorro y CuentaCorriente, cada una con su propio comportamiento (polimorfismo). Encapsular los datos usando propiedades privadas (#).

class Cuenta {
  #saldo;

  constructor(titular) {
    this.titular = titular;
    this.#saldo = 0;
  }

  depositar(monto) {
    this.#saldo += monto;
  }

  retirar(monto) {
    if (monto <= this.#saldo) this.#saldo -= monto;
  }

  getSaldo() {
    return this.#saldo;
  }
}

class CuentaAhorro extends Cuenta {
  constructor(titular) {
    super(titular);
  }

  retirar(monto) {
    console.log("Retiro solo si hay suficiente saldo (Ahorro)");
    super.retirar(monto);
  }
}

class CuentaCorriente extends Cuenta {
  constructor(titular) {
    super(titular);
  }

  retirar(monto) {
    console.log("Retiro con posible sobregiro (Corriente)");
    super.depositar(100); // simulo crédito extra
    super.retirar(monto);
  }
}

//Pruebas
const cuenta1 = new CuentaAhorro("Lucía");
cuenta1.depositar(200);
cuenta1.retirar(100);
console.log(cuenta1.getSaldo());

const cuenta2 = new CuentaCorriente("Carlos");
cuenta2.retirar(50); // esto permite un sobregiro simulado
console.log(cuenta2.getSaldo());
