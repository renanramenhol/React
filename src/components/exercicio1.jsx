import { useState } from "react";

export default function Exercicio1() {
  const [valorInput1, setValorInput1] = useState("");
  const [valorInput2, setValorInput2] = useState("");
  const [valorInput3, setValorInput3] = useState("");
  const [valorInput4, setValorInput4] = useState("");
  const [resposta, setResposta] = useState("");

  const handleClick = () => {

    const valorCalculado = distanciaEntrePontos(valorInput1, valorInput2, valorInput3, valorInput4);
    setResposta(valorCalculado.toFixed(2));

  };

  function distanciaEntrePontos(x1, y1, x2, y2) {
    let d;
    let primeiraSubtracao;
    let primeiraPotencia;
    let segundaSubtracao;
    let segundaPotencia;
    let soma;
    let raiz;

    primeiraSubtracao = x2 - x1;
    primeiraPotencia = primeiraSubtracao ** 2;

    segundaSubtracao = y2 - y1;
    segundaPotencia = segundaSubtracao ** 2;

    soma = primeiraPotencia + segundaPotencia;

    raiz = Math.sqrt(soma);

    d = raiz;

    return d;   

}

  return (
    <div>
      <label htmlFor="valorx1">Valor x1</label>
      <input value={valorInput1} onInput={e => setValorInput1(e.target.value)} id="valorx1" placeholder="Digite o valor de x1" type="number" />

      <label htmlFor="valory1">Valor y1</label>
      <input value={valorInput2} onInput={e => setValorInput2(e.target.value)} id="valory1" placeholder="Digite o valor de y1" type="number" />

      <label htmlFor="valorx2">Valor x2</label>
      <input value={valorInput3} onInput={e => setValorInput3(e.target.value)} id="valorx2" placeholder="Digite o valor de x2" type="number" />

      <label htmlFor="valory2">Valor y2</label>
      <input value={valorInput4} onInput={e => setValorInput4(e.target.value)} id="valory2" placeholder="Digite o valor de y2" type="number" />

      <button onClick={handleClick}>Calcular Distância</button>

      <div>
        
        Distancia calculada é : {resposta}
      </div>
    </div>
  );
}
