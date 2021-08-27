import axios from "axios";
import { createContext, useEffect, useState } from "react";

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