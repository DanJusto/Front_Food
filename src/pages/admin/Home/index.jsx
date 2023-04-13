import { useState, useEffect } from "react";
import { api } from "../../../services/api";
import { Container, Content } from "./style";
import { HeaderAdmin } from "../../../components/Header/HeaderAdmin";
import { Footer } from "../../../components/Footer";
import { Advertising } from "../../../components/Advertising";
import { SectionAdmin } from "../../../components/Section/SectionAdmin";

export function Home() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const reifeicoes = products.filter(product => product.category === 'refeição');
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
      <HeaderAdmin func={setSearch}/>
      <main>
        <Advertising />
        <Content>
          <SectionAdmin title="Refeições" products={reifeicoes} />
          <SectionAdmin title="Sobremesas" products={sobremesas} />
          <SectionAdmin title="Bebidas" products={bebidas} />
        </Content>
      </main>
      <Footer />
    </Container>
  );
}