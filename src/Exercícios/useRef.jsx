import { useRef, useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [coment, setComent] = useState([]);
  const inputElement = useRef();

  const lista = () =>
    coment.map((com) => {
      return <li>{com}</li>;
    });

  function handleClick(e) {
    e.preventDefault();
    setComent([...coment, input]);
    setInput("");
    inputElement.current.focus();
  }

  return (
    <>
      <input
        ref={inputElement}
        value={input}
        type="text"
        onChange={(element) => setInput(element.target.value)}
      ></input>
      <button onClick={handleClick}>Enviar</button>
      <ul>{lista()}</ul>
    </>
  );
}