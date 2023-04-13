import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import { Container, Form } from "./style";
import { HeaderAdmin } from "../../../components/Header/HeaderAdmin";
import { Footer } from "../../../components/Footer";
import { TextButton } from "../../../components/TextButton";
import { Input } from "../../../components/Input";
import { SelectInput } from "../../../components/SelectInput";
import { CareLeft } from "../../../components/Icons/CareLeft";
import { Ingredients } from "../../../components/Ingredients";
import { TextArea } from "../../../components/TextArea";
import { Button } from "../../../components/Button";
import { FiUpload } from "react-icons/fi";

export function New() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const [imageFile, setImageFile] = useState(null);

  const navigate = useNavigate();
  let id;

  function backToHomeOrMenu() {
    navigate(-1);
  }

  async function handleChangeImage(event) {
    const file = event.target.files[0];
    setImageFile(file);
  }

  function handleAddTag() {
    if (!newTag) {
        return alert("Não é possível incluir um ingrediente vazio")
    }
    
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
      setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewProduct() {
    if(!title) {
      return alert("Digite o nome do produto.")
    }

    if(newTag) {
      return alert("Clique para adicionar o ingrediente ou deixe o campo vazio.");
    }

    await api.post("/products", {
      title,
      description,
      category,
      price,
      tags
    })
    .then(async () => {
      const product = await api.get(`/products/?search=${title}`)
      id = product.data[0].product_id
    })
    .then(async () => {
      const fileUploadForm = new FormData();
      fileUploadForm.append("image", imageFile);
      await api.patch(`/products/${id}/image`, fileUploadForm);
    });

    alert("Produto cadastrado com sucesso!")
    navigate("/");
  }

  return (
    <Container>
      <HeaderAdmin />
      <main>
        <TextButton icon={CareLeft} title="voltar" onClick={backToHomeOrMenu} />
        <h1>Novo prato</h1>
        <Form>
          <div className="desktop-wrap1">
            <div className="image-wrap">
              <label htmlFor="image">Imagem do prato</label>
              <Input id="image" type="file" icon={FiUpload} onChange={handleChangeImage} />
            </div>
            <div className="name-wrap">
              <label htmlFor="name">Nome</label>
              <Input 
                id="name" 
                placeholder="Ex.: Salada Ceasar" 
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div className="category-wrap">
              <label htmlFor="category">Categoria</label>
              <SelectInput 
                id="category" 
                option1="refeição" 
                option2="sobremesa" 
                option3="bebida" 
                onChange={e => setCategory(e.target.value)}
              />
            </div>
          </div>
          <div className="desktop-wrap2">
            <div className="ingredients-wrap">
              <h3>Ingredientes</h3>
              <div className="marcadores">
                {
                  tags.map((tag, index) => (
                    <Ingredients 
                      key={String(index)}
                      value={tag}
                      onClick={() => handleRemoveTag(tag)}
                    />
                  ))
                }
                  <Ingredients 
                    isNew 
                    value={newTag}
                    placeholder="Adicionar" 
                    onChange={e => setNewTag(e.target.value)}
                    onClick={handleAddTag}
                  />
              </div>
            </div>
            <div className="price-wrap">
              <label htmlFor="price">Preço</label>
              <Input 
                id="price" 
                placeholder="R$ 00,00" 
                onChange={e => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="area-wrap">
            <label htmlFor="description">Descrição</label>
            <TextArea 
              id="description" 
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" 
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <Button title="Adicionar" onClick={handleNewProduct} />
        </Form>
      </main>
      <Footer />
    </Container>
  );
}