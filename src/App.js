import "./App.css";
import { ListaDeNotas } from "./components/ListaDeNotas";
import { FormularioCadastro } from "./components/FormularioCadastro";
import {Exercicio1} from "./components/exercicio1";

function App() {
  return (
    <section>
      <FormularioCadastro />
      <ListaDeNotas />
     
    </section>
  );
}

export default App;
