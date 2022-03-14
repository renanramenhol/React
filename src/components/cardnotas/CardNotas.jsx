import React, { Component } from "react";
import "./cardnotas.css"

class CardNotas extends Component {
  render() {
    return (
      <section className="card-notas">
        <header>
          <h3>Título</h3>
        </header>
        <p>Escreva sua Nota</p>
      </section>
    );
  }
}

export default CardNotas;
