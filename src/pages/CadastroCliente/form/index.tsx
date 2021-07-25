import { FormEvent, useCallback, useEffect, useState } from "react";
import { WrapForm } from "./style";
import { useHistory } from "react-router-dom";

const FormCliente = () => {
  const [sex, setSex] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEamil] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [endereco, setEndereco] = useState<string>("");
  // const [clients, setCients] = useState<string | any>([{}]);
  const location = useHistory();

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      let cliente = {
        email: email,
        name: name,
        telefone: telefone,
        sex: sex,
        endereco: endereco,
      };
      const str = JSON.stringify(cliente);
      localStorage.setItem("cliente", str);
      alert("cliente cadastrado!");
      location.push("/");
    },
    [email, endereco, location, name, sex, telefone]
  );

  useEffect(() => {
  }, [ handleSubmit]);
  return (
    <WrapForm>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nome:</label>
        <input
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <label htmlFor="">E-mail:</label>
        <input
          type="email"
          value={email}
          onChange={({ target }) => setEamil(target.value)}
        />
        <label htmlFor="">Telefone:</label>
        <input
          type="text"
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
        />
        <label htmlFor="">Endereço:</label>
        <input
          type="text"
          value={endereco}
          onChange={({ target }) => setEndereco(target.value)}
        />
        <label htmlFor="select">Sexo:</label>
        <select id="select" onChange={({ target }) => setSex(target.value)}>
          <option selected>Selecione o sexo</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>
        <button type="submit">Cadastrar</button>
      </form>
    </WrapForm>
  );
};

export default FormCliente;
