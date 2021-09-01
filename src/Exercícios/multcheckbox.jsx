import { useState } from "react";

export default function App() {
  const [cores, setCores] = useState(['azul']);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value))
    }
  }

  function checkCores(cor){
    return cores.includes(cor)
  }

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="azul"
            checked={checkCores('azul')}
          onChange={handleChange}
        />
        azul
      </label>

      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={checkCores('vermelho')}
          onChange={handleChange}
        />
        vermelho
      </label>

      <label>
        <input
          type="checkbox"
          value="verde"
          checked={checkCores('verde')}
          onChange={handleChange}
        />
        verde
      </label>
    </form>
  );
}
