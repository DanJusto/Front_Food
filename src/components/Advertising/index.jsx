import { Container } from "./style";
import pngegg from "../../assets/pngegg.png";

export function Advertising() {

  return (
    <Container>
      <img src={pngegg} alt="imagem de frutas, folhas e macarons voando" />
      <div className="text">
        <h1>Sabores inigualáveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
      </div>
    </Container>
  );
}