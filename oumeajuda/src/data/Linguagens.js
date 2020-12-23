export default class Linguagens {
  constructor() {
    this.linguagens = [];
    this.linguagensMap = new Map();
    this.error = null;
  }

  getLinguagensFromService() {
    console.log("aqui");
    fetch("http://localhost:7000/linguagens")
      .then((res) => res.json())
      .then(
        (result) => {
          result.linguagens.forEach((linguagem) => {
            this.linguagens.push(linguagem);
            this.linguagensMap.set(
              linguagem.languageId,
              linguagem.languageName
            );
          });
        },

        (error) => {
          this.linguagensError = error;
        }
      );
  }

  getLinguagens() {
    if (this.linguagens[0]) {
      return this.linguagens;
    }

    this.getLinguagensFromService();

    return this.linguagens;
  }

  getLinguagensMap() {
    if (this.linguagensMap) {
      return this.linguagensMap;
    }

    this.getLinguagensFromService();

    return this.linguagensMap;
  }
}
