import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Produtos(){

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