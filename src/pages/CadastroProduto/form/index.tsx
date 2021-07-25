import { FormEvent, useState } from "react";
import { WrapForm } from "./style";
import {useHistory} from "react-router-dom"

const FormProduto = () => {
  const [produtoName, setProdutoName] = useState<string>("");
  const [codigo, setCodigo] = useState<string>("");
  const [quantidade, setQuantidade] = useState<string>("");
  const [cor, setCor] = useState<string>("");
  const [tipo, setTipo] = useState<string>("");
  const location = useHistory();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    let produto = {
      produtoName: produtoName,
      codigo: codigo,
      quantidade: quantidade,
      tipo: tipo,
      cor: cor,
    };
    const str = JSON.stringify(produto);
    localStorage.setItem('produto', str);
  alert("produto cadastrado!")
    location.push("/")
  };
  return (
    <WrapForm>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nome:</label>
        <input
          type="text"
          value={produtoName}
          onChange={({ target }) => setProdutoName(target.value)}
        />
        <label htmlFor="">Codigo:</label>
        <input
          type="text"
          value={codigo}
          onChange={({ target }) => setCodigo(target.value)}
        />
        <label htmlFor="">Quantidade:</label>
        <input
          type="text"
          value={quantidade}
          onChange={({ target }) => setQuantidade(target.value)}
        />
        <label htmlFor="">Cor:</label>
        <input
          type="text"
          value={cor}
          onChange={({ target }) => setCor(target.value)}
        />
        <label htmlFor="">Tipo:</label>
        <select onChange={({ target }) => setTipo(target.value)}>
        <option selected>Selecione o tipo do produto</option>
          <option value="Jersey">Jersey</option>
          <option value="Cap">Cap</option>
        </select>
        <button type="submit">Cadastrar</button>
      </form>
    </WrapForm>
  );
};

export default FormProduto;
