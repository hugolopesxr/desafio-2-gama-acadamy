import FormCliente from "./form";
import { WrapContent } from "./style";
import { useHistory } from "react-router-dom";
const CadastroCliente = () => {
  const location = useHistory();
  return (
    <WrapContent>
      <div>
        <button onClick={() => location.push("/")} type="button">
          Voltar
        </button>
        <h1>Cadastrar Cliente</h1>
      </div>
      <FormCliente />
    </WrapContent>
  );
};

export default CadastroCliente;
