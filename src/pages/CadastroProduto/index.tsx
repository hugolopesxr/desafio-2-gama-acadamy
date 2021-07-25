import { WrapContent } from "./style";
import FormProduto from "./form";
import { useHistory } from "react-router-dom";
const CadastroProduto = () => {
  const location = useHistory();
  return (
    <WrapContent>
      <div>
        <button onClick={() => location.push("/")} type="button">
          Voltar
        </button>
        <h1>Cadastrar Produto</h1>
      </div>
      <FormProduto />
    </WrapContent>
  );
};

export default CadastroProduto;
