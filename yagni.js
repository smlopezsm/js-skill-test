//Evitar funcionalidades no necesarias hasta que lo sean
//Codigo que viola yagni
class User {
  constructor(name) {
    this.name = name;
    this.socialMediaProfiles = []; // aún no lo usamos
    this.preferences = {}; // tampoco usado aún
    this.notifications = []; // tampoco
  }

  save() {
    // lógica de guardado
  }

  syncWithSocialMedia() {
    // aún no se necesita
  }

  configurePreferences() {
    // tampoco implementado aún
  }
}

//aplicando yagni
class User {
  constructor(name) {
    this.name = name;
  }

  save() {
    // lógica de guardado
  }
}

// Si en el futuro se necesita agregar preferencias o redes sociales, se hará en ese momento.
