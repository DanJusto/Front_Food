import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { api } from "../../../services/api";
import { Container } from "./style";
import { TextButton } from "../../TextButton";
import pencil from "../../../assets/icons/pencil.svg";

export function SectionAdmin({title, products}) {
  const navigate = useNavigate();

  function moveToProduct(id) {
    navigate(`/product/${id}`);
  }

  function handleEditProduct(id) {
    navigate(`/edit/${id}`);
  }

  return (
    <Container 
      className="swiper"
    >
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView="auto"
        spaceBetween={10}
      >
        {
          products.map(product => (
            <SwiperSlide className="item" key={String(product.product_id)}>
              <img src={pencil} alt="ícone de lápis para editar" onClick={() => handleEditProduct(product.product_id)}/>
              <div>
                <img src={`${api.defaults.baseURL}/files/${product.image}`} alt="foto da refeição" />
                <TextButton title={product.title} onClick={() => moveToProduct(product.product_id)} />
                <p>{product.description}</p>
                <h3>{product.price}</h3>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Container>
  );
}
