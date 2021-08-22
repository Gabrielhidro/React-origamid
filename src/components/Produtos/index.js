import Header from "../Header";

const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

export default function Produtos(props){
    return (
        <>
        <Header />
        {produtos.map(item => {
            return (
            <ul style={{border: props.style}}>
                <li>{item.nome}</li>
                <li>{item.propriedades.map(iten => {
                    return <p>{iten}</p>
                })}</li>
            </ul>
            )
        })}
        </>
    )
}