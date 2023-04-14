import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../../services/api";
import { Container, Content } from "./style";
import { HeaderCommon } from "../../../components/Header/HeaderCommon";
import { Footer } from "../../../components/Footer";
import { TextButton } from "../../../components/TextButton";
import { Button } from "../../../components/Button";
import { CareLeft } from "../../../components/Icons/CareLeft";
import { Receipt } from "../../../components/Icons/Receipt";
import { Tag } from "../../../components/Tag";
import { Stepper } from "../../../components/Stepper";
import saladaravanello from "../../../assets/saladaravanello.png"

export function ProductCommon() {
  const [product, setProduct] = useState([]);
  const [tags, setTags] = useState([]);

  const imageUrl = `${api.defaults.baseURL}/files/${product.image}`

  const params = useParams();
  const navigate = useNavigate();
  let productTags = [];
  if (tags) {
    tags.map(tag => {
      productTags.push(tag.tag_name)
    })
  }

  function backToHomeOrMenu() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/products/${params.id}`);
      setProduct(response.data);
      setTags(response.data.tags);
    };
    fetchProduct();
  }, []);

  return (
    <Container>
      <HeaderCommon />
      <main>
        <TextButton icon={CareLeft} title="voltar" onClick={backToHomeOrMenu} />
        <Content>
          <img src={imageUrl} alt="foto da refeição" />
          <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            {
              tags &&
              <div className="tags">
              {
                productTags.map((tag, index) => (
                  <Tag 
                    key={index}
                    title={tag}
                  />
                ))
              }
              </div>
            }
            <div className="pedido">
              <Stepper />
              <Button id="button-pedir" icon={Receipt} title={`pedir ∙ ${product.price}`}/>
            </div>
          </div>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}