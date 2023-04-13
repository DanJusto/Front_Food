import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";
import { Container, Form } from "./style";
import { Button } from "../../../components/Button";
import { TextButton } from "../../../components/TextButton";
import { Input } from "../../../components/Input";
import logo from "../../../assets/polygon.svg";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { signIn } = useAuth();

  function navigateToRegister() {
    navigate("/register");
  }

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <div>
        <img src={logo} alt="logo do food explorer" />
        <h1>food explorer</h1>
      </div>
      <Form>
        <label htmlFor="login">Email</label>
        <Input 
          id="login"
          type="email"
          placeholder="exemplo@exemplo.com.br" 
          onChange={e => setEmail(e.target.value)}
        /> 
        <label htmlFor="password">Senha</label>
        <Input 
          id="password"
          type="password"
          placeholder="No mínimo 6 caracteres" 
          onChange={e => setPassword(e.target.value)}
        />
        <Button title="Entrar" onClick={handleSignIn} />
        <TextButton title="Criar uma conta" onClick={navigateToRegister} />
      </Form>
    </Container>
  )
}