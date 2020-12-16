import React, { Component } from "react";
import ListaDeNotas from "./ListaDePedidos";
import FormularioCadastro from "./FormularioPedido";
import ListaDeCategorias from "./ListaDeLinguagem";
import "../../assets/index.css";
import "../../assets/App.css";
import ArrayDeNotas from "../../data/Notas";
import Categorias from "../../data/Categorias";

class HomeComponent extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(
              this.categorias
            )}
            categorias={this.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNotas.bind(this.notas)}
            notas={this.notas}
          />
        </main>
      </section>
    );
  }
}

export default HomeComponent;