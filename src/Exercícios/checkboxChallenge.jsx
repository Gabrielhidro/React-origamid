// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.
// const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];


import { useState } from "react";

export default function App() {
  const [cores, setCores] = useState([]);
  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza', 'cinza'];

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map((cor, index) => {
        return (
          <label key={cor + index}>
            <input
              type="checkbox"
              value={cor + index}
              checked={handleChecked(cor + index)}
              onChange={handleChange}
            />
            {cor}
          </label>
        )
      })}
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
};