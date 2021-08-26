import Context from "./Context"
import Produtos from "./Produtos"

export default function App(){
  return (
    <Context.Provider value={{ nome: 'Gabriel'}}>
      <Produtos />
    </Context.Provider>
  )
};