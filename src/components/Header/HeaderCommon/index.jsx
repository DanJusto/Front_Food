import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";
import { FiSearch } from "react-icons/fi";
import { Container } from "./style";
import logo from "../../../assets/polygon.svg";
import receipt from "../../../assets/icons/receipt.svg";
import logout from "../../../assets/icons/logout.svg";
import { Receipt } from "../../Icons/Receipt";
import menu from "../../../assets/icons/menu.svg";
import { Input } from "../../Input";
import { Button } from "../../Button";

export function HeaderCommon({func}) {

  const { signOut } = useAuth();
  const navigate = useNavigate();

  function navigateToMenu() {
    navigate("/menu");
  }

  function handleSignOut() {
    navigate("/");
    signOut();
}

  return (
    <Container>
      <img src={menu} alt="menu" onClick={navigateToMenu}/>
      <div>
        <img src={logo} alt="logo do food explorer" />
        <h1>food explorer</h1>
        <Input 
          id="input" 
          icon={FiSearch} 
          placeholder="Busque por pratos ou ingredientes" 
          onChange={e => func(e.target.value)}  
        />
      </div>
      <Button id="button-desktop" icon={Receipt} title="Pedidos (0)" />
      <div className="mobile-receipt">
        <img src={receipt} alt="fechar a conta" />
        <div>0</div>
      </div>
      <img id="logout" src={logout} alt="sair" onClick={handleSignOut} />
    </Container>
  );
}