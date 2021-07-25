import React from "react";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import { Content } from "./style";

const Home = () => {
  const [ClientValue, setClientValue] = React.useState<string | any>({});

  const [ProdutoValue, setProdutoValue] = React.useState<string | any>({});

  const getLocalClient = () => {
    let client: string | any = localStorage.getItem("cliente");
    let objClient = JSON.parse(client);
    setClientValue(objClient);
  };
  const getLocalProduto = () => {
    let produto: string | any = localStorage.getItem("produto");
    let objProduto = JSON.parse(produto);
    setProdutoValue(objProduto);
  };
  React.useEffect(() => {
    getLocalClient();
    getLocalProduto();
  }, []);
  return (
    <div>
      <Menu />
      <Content>
        <div>
          <h2>Lista de clientes cadastrados.</h2>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Endereço</th>
                <th>Sexo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{ClientValue?.name ? ClientValue?.name : ""}</td>
                <td>{ClientValue?.email ? ClientValue?.email : ""}</td>
                <td>{ClientValue?.telefone ? ClientValue?.telefone : ""}</td>
                <td>{ClientValue?.endereco ? ClientValue?.endereco : ""}</td>
                <td>{ClientValue?.sex ? ClientValue?.sex : ""}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2>Lista de produtos cadastrados.</h2>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Codigo</th>
                <th>Quantidade</th>
                <th>Cor</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {ProdutoValue?.produtoName ? ProdutoValue?.produtoName : ""}
                </td>
                <td>{ProdutoValue?.codigo ? ProdutoValue?.codigo : ""}</td>
                <td>
                  {ProdutoValue?.quantidade ? ProdutoValue?.quantidade : ""}
                </td>
                <td>{ProdutoValue?.cor ? ProdutoValue?.cor : ""}</td>
                <td>{ProdutoValue?.tipo ? ProdutoValue?.tipo : ""}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Content>
      <Footer title="Criado por Hugo Lopes" />
    </div>
  );
};

export default Home;
