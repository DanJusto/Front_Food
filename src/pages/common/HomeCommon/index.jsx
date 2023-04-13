import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import { Container, Content } from "./style";
import { HeaderCommon } from "../../../components/Header/HeaderCommon";
import { Footer } from "../../../components/Footer";
import { Advertising } from "../../../components/Advertising";
import { SectionCommon } from "../../../components/Section/SectionCommon";

export function HomeCommon() {

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const refeicoes = products.filter(product => product.category === 'refeição');
  const sobremesas = products.filter(product => product.category === 'sobremesa');
  const bebidas = products.filter(product => product.category === 'bebida');

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/products?search=${search}`);
      setProducts(response.data);
    };
    fetchNotes();
  }, [search]);

  return (
    <Container>
      <HeaderCommon func={setSearch}/>
      <main>
        <Advertising />
        <Content>
          <SectionCommon title="Refeições" products={refeicoes}/>
          <SectionCommon title="Sobremesas" products={sobremesas}/>
          <SectionCommon title="Bebidas" products={bebidas}/>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}