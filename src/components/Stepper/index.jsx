import { Container } from "./style";
import { Input } from "../Input";
import minus from "../../assets/icons/minus.svg"
import plus from "../../assets/icons/plus.svg"

export function Stepper() {
  return (
    <Container>
      <img src={minus} alt="ícone de menos" />
      <Input type="number" defaultValue="01" />
      <img src={plus} alt="ícone de mais" />
    </Container>
  );
}