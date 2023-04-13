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
import { SectionCommon } from "../../../components/Section/SectionCommon";

export function MenuCommon() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const refeicoes = products.filter(product => product.category === 'refeição');
  const sobremesas = products.filter(product => product.category === 'sobremesa');
  const bebidas = products.filter(product => product.category === 'bebida');

  
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
            <SectionCommon title="Refeições" products={refeicoes}/>
            <SectionCommon title="Sobremesas" products={sobremesas}/>
            <SectionCommon title="Bebidas" products={bebidas}/>
          </div>
          : <div/>
        }
        <TextButton title="Sair" onClick={handleSignOut} />
      </Content>
      <Footer />
    </Container>
  );
}