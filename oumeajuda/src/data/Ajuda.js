export default class ArrayDeNotas {
  constructor() {
    this.notas = [];
    this._inscritos = [];
  }

  adicionarNota(titulo, texto, categoria, contato, createdAt) {
    const novaNota = new Pedido(titulo, texto, categoria, contato, createdAt);
    this.notas.push(novaNota);
    this.notificar();
  }

  apagarNotas(indice) {
    this.notas.splice(indice, 1);
    this.notificar();
  }

  inscrever(func) {
    this._inscritos.push(func);
  }

  desinscrever(func) {
    this._inscritos = this._inscritos.filter((f) => f !== func);
  }

  notificar() {
    this._inscritos.forEach((func) => {
      func(this.notas);
    });
  }
}

class Pedido {
  constructor(titulo, texto, categoria, contato, createdAt) {
    this.title = titulo;
    this.description = texto;
    this.userId = 1;
    this.allowPhoneNumber = false;
    this.phoneNumber = contato;
    this.professorId = null;
    this.languageId = categoria;
    this.createdAt = createdAt;
  }
}
