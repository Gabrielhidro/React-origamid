// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

import { useState } from "react";

export default function App(){

  const [ dados, setDados ] = useState(null)
  const [ carregando, setCarregando ] = useState(false)

  async function handleClick(event) {
    setCarregando(true)
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.value}`,
      );
      const json = await response.json();
      setDados(json)
      setCarregando(false)
    }

    const Produto = ({ dados }) => {
      return (
        <div>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco}</p>
          <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
        </div>
      );
    };

    
  return (
    <>
      <button onClick={handleClick} value='tablet'>tablet</button>
      <button onClick={handleClick} value='smartphone'>smartphone</button>
      <button onClick={handleClick} value='notebook'>notebook</button>

      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
      
    </>
  )
};