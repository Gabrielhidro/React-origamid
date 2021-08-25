// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo
import React from 'react';

export default function App(){
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== 'null') setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  const Produto = ({ produto }) => {
    const [dados, setDados] = React.useState(null);
  
    React.useEffect(() => {
      if (produto !== null) {
        fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
          .then((response) => response.json())
          .then((json) => setDados(json));
      }
    }, [produto]);
  
    if (dados === null) return null;
    return (
      <div>
        <h1>{dados.nome}</h1>
        <p>R$ {dados.preco}</p>
      </div>
    );
  };

  

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button style={{ marginRight: '1rem' }} onClick={handleClick}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
      <Produto produto={produto} />
    </div>
  );
};