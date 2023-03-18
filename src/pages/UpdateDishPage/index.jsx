import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Loading from "../../components/Loading";
import { getDish, updateDish } from "../../services/api";
import { convertToBase64 } from "../../utils/convertToBase64";
import { StyledUpdateDish } from "./style";

const UpdateDishPage = () => {
  const [title, setTtitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const [viewImage, setViewImage] = useState(null);
  const navigate = useNavigate();
  const { typeDishId, dishId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetDish();
  }, []);

  const GetDish = async () => {
    try {
      const { data } = await getDish(dishId);
      setTtitle(data.name);
      setPrice(data.price);
      setDescription(data.description);
      setStatus(data.status);
      setImage(data?.image?.includes("base64"));
      setViewImage(data.image);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const UpdateDish = async () => {
    try {
      await updateDish(
        title,
        price,
        description,
        status,
        image,
        dishId,
        typeDishId
      );
      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };

  const newImage = async (file) => {
    try {
      const base64 = await convertToBase64(file);
      setViewImage(base64);
      setImage(file);
    } catch (err) {
      console.log(err);
      setImage("");
      setViewImage(null);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <StyledUpdateDish>
      <div className="container">
        <h1>{`Atualizando prato`}</h1>
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
              col="10px"
              cols="50"
              rows="4"
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
          <div className="field">
            <div className="radio">
              <input
                className="radio"
                type="radio"
                name="status"
                id="ativo"
                value="ativo"
                checked={status == "ativo"}
                onChange={(e) => setStatus(e.target.value)}
              />
              <label className="radio" htmlFor="ativo">Ativo</label>
            </div>
            <div className="radio">
              <input
                className="radio"
                type="radio"
                name="status"
                id="inativo"
                value="inativo"
                checked={status != "ativo"}
                onChange={(e) => setStatus(e.target.value)}
              />
              <label className="radio" htmlFor="inativo">Inativo</label>
            </div>
          </div>
        </div>
      </div>
      <div className="actions">
        <Button onClick={() => UpdateDish()}>Atualizar</Button>
        <Button onClick={() => navigate(-1)}>Cancelar</Button>
      </div>
    </StyledUpdateDish>
  );
};

export default UpdateDishPage;
