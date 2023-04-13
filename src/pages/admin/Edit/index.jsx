import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
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

export function Edit() {
  const [product, setProduct] = useState([]);

  const imageUrl = `${api.defaults.baseURL}/files/${product.image}`
  const [imageFile, setImageFile] = useState(imageUrl);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  async function handleChangeImage(event) {
    const file = event.target.files[0];
    setImageFile(file);
  }

  function backToHomeOrProduct() {
    navigate(-1);
  }

  function handleAddTag() {
    if (!newTag) {
        return alert("Não é possível incluir um ingrediente vazio")
    }
    setTags(prevState => [...prevState, {tag_name: newTag}]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
      setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleDeleteProduct() {
    const check = confirm("Tem certeza que deseja excluir o produto?")
    if(!check) {
      return
    }
    
    await api.delete(`/products/${params.id}`);
    alert("Produto excluído com sucesso!")
    navigate("/");
  }

  async function handleUpdateProduct() {
    if(newTag) {
      return alert("Clique para adicionar o ingrediente ou deixe o campo vazio.");
    }

    let newTitle;
    let newDescription;
    let newCategory;
    let newPrice;
    let newTags = [];

    !title ? newTitle = product.title : newTitle = title;
    !description ? newDescription = product.description : newDescription = description;
    !category ? newCategory = product.category : newCategory = category;
    !price ? newPrice = product.price : newPrice = price;
    tags.map(tag => {
      newTags.push(tag.tag_name)
    })


    const fileUploadForm = new FormData();
    fileUploadForm.append("image", imageFile);
    const response = await api.patch(`/products/${params.id}/image`, fileUploadForm);
    product.image = response.data.image;

    await api.put(`/products/${params.id}`, {
      title: newTitle,
      description: newDescription,
      category: newCategory,
      price: newPrice,
      tags: newTags
    });

    alert("Produto alterado com sucesso!")
    navigate("/");
  }

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get(`/products/${params.id}`);
      setProduct(response.data);
      setTags(response.data.tags);
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      <HeaderAdmin />
      <main>
        <TextButton icon={CareLeft} title="voltar" onClick={backToHomeOrProduct} />
        <h1>Editar prato</h1>
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
                defaultValue={product.title}
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
                category={product.category}
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
                      value={tag.tag_name}
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
                defaultValue={product.price} 
                onChange={e => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="area-wrap">
            <label htmlFor="description">Descrição</label>
            <TextArea 
              id="description" 
              defaultValue={product.description} 
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <div className="buttons">
            <Button title="Excluir prato" onClick={handleDeleteProduct} />
            <Button title="Salvar alterações" onClick={handleUpdateProduct} />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  );
}