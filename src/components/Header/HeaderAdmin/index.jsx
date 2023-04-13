import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";
import { FiSearch } from "react-icons/fi";
import { Container } from "./style";
import logo from "../../../assets/polygon.svg";
import logout from "../../../assets/icons/logout.svg";
import menu from "../../../assets/icons/menu.svg";
import { Input } from "../../Input";
import { Button } from "../../Button";

export function HeaderAdmin({func}) {

  const { signOut } = useAuth();
  const navigate = useNavigate();

  function navigateToMenu() {
    navigate("/menu");
  }

  function navigateToNew() {
    navigate("/new");
  }

  function handleSignOut() {
    navigate("/");
    signOut();
}

  return (
    <Container>
      <img id="menu" src={menu} alt="menu" onClick={navigateToMenu}/>
      <div>
        <img src={logo} alt="logo do food explorer" />
        <div>
          <h1>food explorer</h1>
          <span>admin</span>
        </div>
        <Input 
          id="input" 
          icon={FiSearch} 
          placeholder="Busque por pratos ou ingredientes" 
          onChange={e => func(e.target.value)}
        />
      </div>
      <Button id="button-desktop" title="Novo prato" onClick={navigateToNew}/>
      <img id="logout" src={logout} alt="sair" onClick={handleSignOut}/>
    </Container>
  );
}