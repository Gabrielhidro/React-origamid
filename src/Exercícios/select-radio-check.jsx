
    import { useState } from "react";

    export default function App(){
        const [select, setSelect] = useState('');
        const [radio, setRadio] = useState('');

        function handleChange({target}){
            setRadio(target.value)
        }
      
        return (
        <>
                                       {/* Select */}
          <form>
            <select value={select} onChange={({ target }) => setSelect(target.value)}>
              <option value="" disabled>
                Selecione
              </option>
              <option value="notebook">Notebook</option>
              <option value="smartphone">Smartphone</option>
              <option value="tablet">Tablet</option>
            </select>
            <p>{select}</p>
          </form>
    
                                        {/* Radio */}
            <form>
                <label>
                    <input type="radio" name="produto" value="notebook" onChange={handleChange}  />
                    Notebook
                </label>
                <label>
                    <input type="radio" name="produto" value="smartphone" onChange={handleChange} />
                    Smartphone
                </label>
                <div>
                    {radio}
                </div>
            </form>
        </>
        );
      };