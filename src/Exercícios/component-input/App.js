import React from "react";
import Input from "./Form/Input";
import Radio from "./Form/radio";
import Select from "./Form/Select";

export default function App() {
  const [nome, setNome] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  return (
    <form>
      <Input
        label="Nome"
        id="nome"
        type="text"
        value={nome}
        setValue={setNome}
      />

      <Select 
        options={['Smartphone', 'Tablet', 'Notebook']}
        setValue={setProduto}
        value={produto}
      />

      <Radio
        options={['azul', 'verde', 'amarelo']}
        value={cor}
        setValue={setCor}
      />
    </form>
  );
};