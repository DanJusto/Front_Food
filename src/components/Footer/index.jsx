import { Container } from "./style";
import { Polygon } from "../Icons/PolygonFooter";

export function Footer() {
  
  return (
    <Container>
      <div>
        <Polygon />
        <h3>food explorer</h3>
      </div>
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  );
}