// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global


import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext()

export const GlobalContext = ({children}) => {

    const [ apiDatas, setApiDatas ] = useState([])

    useEffect(() => {
        async function getItems(){
            const response = await axios.get(`https://ranekapi.origamid.dev/json/api/produto/`)
            setApiDatas(response.data)
        }
        getItems()
    }, [])

    function limparDados() {
        setApiDatas(null);
      }

    return (
        <UserContext.Provider value={{apiDatas, limparDados}}>
            {children}
        </UserContext.Provider>
    )
}

function Produtos(){

    const {apiDatas, limparDados} = useContext(UserContext)

    return (
        <div>
            {apiDatas && apiDatas.map(item => {
                return (
                    <li>{item.nome}</li>
                )
            })}
            <button onClick={limparDados}>Limpar</button>
        </div>
    )
}



export default function App(){


  return (
    <GlobalContext>
      <Produtos />
    </GlobalContext>
  )
};