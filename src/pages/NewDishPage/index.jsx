import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { AuthContext } from "../../contexts/auth";
import { createDish } from "../../services/api";
import { convertToBase64 } from "../../utils/convertToBase64";
import { StyledNewDishPage } from "./style";

const NewDishPage = () => {
  const [title, setTtitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [viewImage, setViewImage] = useState(null);
  const navigate = useNavigate();
  const { typedish } = useParams();

  const newDishe = async () => {
    try {
      await createDish(title, description, price, image, typedish);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const newImage = async (file) => {
    const base64 = await convertToBase64(file);
    setViewImage(base64);
    setImage(file);
  };

  return (
    <StyledNewDishPage>
      <div className="container">
        <h1>{`Novo Prato`}</h1>
        <hr />
        <div className="form">
          <div className="field">
            <label>Título</label>
            <Input
              type="text"
              onChange={(e) => setTtitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="field">
            <label>Preço</label>
            <Input
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>
          <div className="field">
            <label>Descrição</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="field">
            <label>Foto</label>
            {viewImage ? (
              <img src={viewImage} width="200x" alt="image" />
            ) : (
              <>
                <label for="file" className="file">
                  Adicione uma imagem
                </label>
                <input
                  id="file"
                  type="file"
                  accept="image/png,image/jpeg"
                  onChange={(e) => newImage(e.target.files[0])}
                />
              </>
            )}
            {!viewImage || (
              <Button
                onClick={() => {
                  setViewImage(null);
                  setImage(null);
                }}
                style={{ height: "25px" }}
              >
                Excluir
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="actions">
        <Button onClick={() => newDishe()}>Criar</Button>
        <Button onClick={() => navigate("/")}>Cancelar</Button>
      </div>
    </StyledNewDishPage>
  );
};

export default NewDishPage;
