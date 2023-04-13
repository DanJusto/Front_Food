import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import { Container, Form } from "./style";
import { Button } from "../../../components/Button";
import { TextButton } from "../../../components/TextButton";
import { Input } from "../../../components/Input";
import logo from "../../../assets/polygon.svg";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function navigateToSignIn() {
    navigate("/");
  }

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    if(password.length < 6) {
      return alert("A senha deve conter no mínimo 6 caracteres.");
    }

    api.post("/users", {name, email, password})
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar");
      }
    });
  }

  return (
    <Container>
      <div>
        <img src={logo} alt="logo do food explorer" />
        <h1>food explorer</h1>
      </div>
      <Form>
        <label htmlFor="name">Seu nome</label>
        <Input 
          id="name"
          type="text"
          placeholder="Maria da Silva" 
          onChange={e => setName(e.target.value)}
        /> 
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
        <Button title="Criar conta" onClick={handleSignUp} />
        <TextButton title="Já tenho uma conta" onClick={navigateToSignIn} />
      </Form>
    </Container>
  )
}