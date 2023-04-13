import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";
import { api } from "../../../services/api";
import { Container, Content } from "./style";
import { HeaderMenu } from "../../../components/Header/HeaderMenu";
import { Footer } from "../../../components/Footer";
import { Input } from "../../../components/Input";
import { TextButton } from "../../../components/TextButton";
import { FiSearch } from "react-icons/fi";
import { SectionAdmin } from "../../../components/Section/SectionAdmin";

export function Menu() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const refeicoes = products.filter(product => product.category === 'refeição');
  const sobremesas = products.filter(product => product.category === 'sobremesa');
  const bebidas = products.filter(product => product.category === 'bebida');

  function navigateToNew() {
    navigate("/new");
  }

  function handleSignOut() {
    navigate("/");
    signOut();
  }
  
  useEffect(() => {
    async function fetchNotes() {
      if (search === "") {
        setProducts([]);
      } else {
        const response = await api.get(`/products?search=${search}`);
        setProducts(response.data);
      }
    };
    fetchNotes();
  }, [search]);

  return (
    <Container>
      <HeaderMenu />
      <Content>
        <Input 
          icon={FiSearch}
          type="text"
          placeholder="Busque por pratos ou ingredientes" 
          onChange={e => setSearch(e.target.value)}  
        />
        {search !== "" ?
          <div className="itens">
            <SectionAdmin title="Refeições" products={refeicoes}/>
            <SectionAdmin title="Sobremesas" products={sobremesas}/>
            <SectionAdmin title="Bebidas" products={bebidas}/>
          </div>
          : <div/>}
        <div>
          <TextButton title="Novo prato" onClick={navigateToNew} />
          <TextButton title="Sair" onClick={handleSignOut} />
        </div>
      </Content>
      <Footer />
    </Container>
  );
}