import { useContext } from "react"
import { GlobalContext } from "./Context"

export default function Produtos(){

    const {contar, adicionar} = useContext(GlobalContext)

    return(
        <div>
            <p>{contar}</p>
            <button onClick={adicionar}>Adicionar</button>
        </div>
    )
}
