import { useNavigate } from "react-router-dom";
import { Container, Content } from "./style";
import { HeaderCommon } from "../../../components/Header/HeaderCommon";
import { Footer } from "../../../components/Footer";
import { TextButton } from "../../../components/TextButton";
import { Button } from "../../../components/Button";
import { CareLeft } from "../../../components/Icons/CareLeft";
import { Receipt } from "../../../components/Icons/Receipt";
import { Tag } from "../../../components/Tag";
import { Stepper } from "../../../components/Stepper";
import saladaravanello from "../../../assets/saladaravanello.png"

export function ProductCommon() {

  const navigate = useNavigate();

  function backToHomeOrMenu() {
    navigate(-1);
  }

  return (
    <Container>
      <HeaderCommon />
      <main>
        <TextButton icon={CareLeft} title="voltar" onClick={backToHomeOrMenu} />
        <Content>
          <img src={saladaravanello} alt="foto da refeição" />
          <div>
            <h2>Salada Ravanello</h2>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
            <div className="tags">
              <Tag title="alface" />
              <Tag title="pão naan" />
              <Tag title="cebola" />
              <Tag title="rabanete" />
              <Tag title="pepino" />
              <Tag title="tomate" />
            </div>
            <div className="pedido">
              <Stepper />
              <Button id="button-pedir" icon={Receipt} title="pedir ∙ R$ 25,00"/>
            </div>
          </div>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}