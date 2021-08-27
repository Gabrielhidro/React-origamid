import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Produtos(){

    const {apiDatas} = useContext(UserContext)
    console.log(apiDatas);

    return (
        <h1>
            OI
        </h1>
    )
}