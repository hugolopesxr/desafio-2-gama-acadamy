import { Header, Nav } from "./style";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Header>
      <Nav>
        <Link to="/">
          <img alt="Logo" src="apaches4.jpeg" />
        </Link>
        <Link to="/cadastro-cliente">
          <a>Cadastro de clientes</a>
        </Link>
        <Link to="/cadastro-produto">
          <a>Cadastro de produtos</a>
        </Link>
      </Nav>
    </Header>
  );
};

export default Menu;
