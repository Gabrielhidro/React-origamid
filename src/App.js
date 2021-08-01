// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = luana;

  // let sumPrice = 0 

  // dados.compras.forEach(e => {
  //   const removeString = e.preco.replace('R$ ', '')
  //   const formatPrice = parseInt(removeString)
  //   sumPrice += formatPrice
  //   console.log(sumPrice);
  // })

  const sumPrice = dados.compras
    .map((e) => Number(e.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b)

  return <div>
    <p>Nome: {dados.cliente}</p>
    <p>Idade: {dados.idade}</p>
    <p>Siuação: <span style={{color: dados.ativa ? 'green' : 'red'}}>{dados.ativa ? 'Ativa' : 'Inativa'}</span></p>
    <p>Total gasto: {sumPrice}</p>
    <p>{sumPrice > 10000 ? 'Você gasta muito' : ''}</p>
  </div>;
};

export default App;
