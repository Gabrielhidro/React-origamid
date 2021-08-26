import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({children}) => {

    const [ contar, setContar ] = useState(0)

    function adicionar(){
        setContar(contar+1)
    }

    return (
        <GlobalContext.Provider value={{ contar, adicionar }}>
            {children}
        </GlobalContext.Provider>
    )
}