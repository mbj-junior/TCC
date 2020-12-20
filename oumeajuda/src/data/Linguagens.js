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
        //   console.log(result.linguagens);
        //   let myMap = new Map();

          result.linguagens.forEach((linguagem) => {
            this.linguagens.push(linguagem);
            this.linguagensMap.set(linguagem.languageId, linguagem.languageName);
          });

        //   // console.log(result.linguagens)
        //   this.linguagensMap = myMap;
        //   this.linguagens.push(result.linguagens);
        },
        // Nota: É importante lidar com os erros aqui
        // em vez de um bloco catch() para não recebermos
        // exceções de erros dos componentes.
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

    // console.log(this.linguagensMap);
    return this.linguagens;
  }

  getLinguagensMap() {
    if (this.linguagensMap) {
      return this.linguagensMap;
    }

    this.getLinguagensFromService();

    // console.log(this.linguagensMap);
    return this.linguagensMap;
  }
}
