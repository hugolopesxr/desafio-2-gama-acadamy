import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import CadastroProduto from "../pages/CadastroProduto";
import CadastroCliente from "../pages/CadastroCliente";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro-produto" component={CadastroProduto} />
      <Route path="/cadastro-cliente" component={CadastroCliente} />
    </Switch>
  );
};

export default Routes;
