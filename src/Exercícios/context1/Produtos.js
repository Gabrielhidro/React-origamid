import { useContext } from "react"
import Context from "./Context"

export default function Produtos(){

    const dados = useContext(Context)
    return(
        <div>
            <p>{dados.nome}</p>
        </div>
    )
}