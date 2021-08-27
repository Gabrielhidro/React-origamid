import { GlobalStorage } from "./Context"
import Produtos from "./Produtos"

export default function App(){
  return (
    <GlobalStorage>
      <Produtos />
    </GlobalStorage>
  )
};