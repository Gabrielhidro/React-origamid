import axios from "axios";
import { useEffect, useState } from "react";

const response = fetch('http://localhost:3000/users')
console.log(response);

export default function App(){

  const [ datas, setDatas ] = useState([])

  useEffect(() => {
    async function getItems(){
      const response = await axios.get(`http://localhost:3000/users`)
      setDatas(response.data)
    }
    getItems()
  }, [])
  console.log(datas);
  
  const renderDatas = () => 
    datas.map(({id, title}) => {
      return (
        <li key={id}>{title}</li>
      )
    })
  

  return (
    <>
      <form>
        <input type="text"></input>
        <button type="submit">Cadastrar</button>
      </form>
     
        {renderDatas()}
    </>
  )
};