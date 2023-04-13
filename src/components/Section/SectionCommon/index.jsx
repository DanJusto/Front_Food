import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { api } from "../../../services/api";
import { Container } from "./style";
import { TextButton } from "../../TextButton";
import { Button } from "../../Button";
import { Stepper } from "../../Stepper";
import heart from "../../../assets/icons/heart.svg";


export function SectionCommon({title, products}) {
  const navigate = useNavigate();

  function moveToProduct(id) {
    navigate(`/product/${id}`);
  }

  return (
    <Container 
      className="swiper"
    >
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        slidesPerView="auto"
        spaceBetween={10}
      >
        {
          products.map(product => (
            <SwiperSlide className="item" key={String(product.product_id)}>
              <img id="favorite" src={heart} alt="ícone de coração para favoritar" />
              <div>
                <img src={`${api.defaults.baseURL}/files/${product.image}`} alt="foto da refeição" />
                <TextButton title={product.title} onClick={() => moveToProduct(product.product_id)} />
                <p>{product.description}</p>
                <h3>{product.price}</h3>
                <div className="step">
                  <Stepper />
                  <Button title="incluir" />
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Container>
  );
}