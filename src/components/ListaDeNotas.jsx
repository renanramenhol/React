import React, { Component } from "react";
import CardNotas from "./cardnotas/CardNotas";

export class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
          return (
            <li key={index}>
              
              <CardNotas />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListaDeNotas;
