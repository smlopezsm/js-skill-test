//S - Single Responsibility Principle (SRP). Cada módulo o clase debe tener una única responsabilidad.
//Violando SRP:
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  saveToDatabase() {}

  sendWelcomeEmail() {}
}

//Aplicando SRP:
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserRepository {
  save(user) {}
}

class EmailService {
  sendWelcomeEmail(user) {}
}

//O - Open/Closed Principle (OCP) .Las entidades deben estar abiertas para extensión pero cerradas para modificación.
//Violando OCP:
function calculateDiscount(user) {
  if (user.type === "premium") return 0.2;
  if (user.type === "regular") return 0.1;
  return 0;
}

//Aplicando OCP con polimorfismo:
class User {
  getDiscount() {
    return 0;
  }
}

class PremiumUser extends User {
  getDiscount() {
    return 0.2;
  }
}

class RegularUser extends User {
  getDiscount() {
    return 0.1;
  }
}

// L - Liskov Substitution Principle (LSP). Las subclases deben poder reemplazar a sus superclases sin romper el código.
//Violando LSP:
class Bird {
  fly() {
    console.log("Estoy volando");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Los pingüinos no pueden volar");
  }
}

//Aplicando LSP:
class Bird {
  makeSound() {
    console.log("Pío");
  }
}

class FlyingBird extends Bird {
  fly() {
    console.log("Estoy volando");
  }
}

class Penguin extends Bird {
  swim() {
    console.log("Estoy nadando");
  }
}

//I - Interface Segregation Principle (ISP). Los clientes no deben depender de interfaces que no usan.
//Violando ISP (clases con métodos no usados):
class Printer {
  print() {}
  scan() {}
  fax() {}
}

class SimplePrinter extends Printer {
  fax() {
    throw new Error("No tengo fax");
  }
}

//Aplicando ISP:
class Printer {
  print() {}
}

class Scanner {
  scan() {}
}

class Fax {
  fax() {}
}

class SimplePrinter extends Printer {}

//D - Dependency Inversion Principle (DIP). Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones.
//Violando DIP (el módulo de alto nivel depende directamente de uno de bajo nivel):
class MySQLDatabase {
  save(data) {
    console.log("Guardando en MySQL");
  }
}

class UserService {
  constructor() {
    this.db = new MySQLDatabase(); // acoplamiento fuerte
  }

  saveUser(user) {
    this.db.save(user);
  }
}

//Aplicando DIP (inyectando dependencias):
class UserService {
  constructor(database) {
    this.db = database;
  }

  saveUser(user) {
    this.db.save(user);
  }
}

class MySQLDatabase {
  save(data) {
    console.log("Guardando en MySQL");
  }
}

class MongoDatabase {
  save(data) {
    console.log("Guardando en MongoDB");
  }
}

// Uso:
const db = new MongoDatabase();
const userService = new UserService(db);
userService.saveUser({ name: "Ada" });
