import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import closeIcon from "../../../assets/icons/close.svg";

export function HeaderMenu() {
  
  const navigate = useNavigate();

  function navigateToHome() {
    navigate("/");
  }

  return (
    <Container>
      <img src={closeIcon} alt="ícone de fechar" onClick={navigateToHome}/>
      <h1>Menu</h1>
    </Container>
  );
}