import { useState } from "react"

export default function App(){

  const [ count, setCount ] = useState(1)
  const [ item, setItem ] = useState(['item 1'])

  function handleClick(){
    setCount((count) => {
      return count+1
    })
    setItem((item) => [...item, 'Item' + (count + 1)])
  }

  return (
    <>
      <button onClick={handleClick}>{count}</button>
      {item.map(item => <li>{item}</li> )}
    </>
  )
};