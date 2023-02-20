import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Loading from "../../components/Loading";
import { AuthContext } from "../../contexts/auth";
import { createDish, updateDataRestaurante } from "../../services/api";
import { convertToBase64 } from "../../utils/convertToBase64";
import { StyledUpdateDataRestaurante } from "./style";

const UpdateDataRestaurante = () => {
    const { restaurant, loadRestautant } = useContext(AuthContext);
    const [name, setName] = useState(restaurant.name)
    const [email, setEmail] = useState(restaurant.email)
    const [telephone, setTelephone] = useState(restaurant.telephone)
    const [whatsapp, setWhatsapp] = useState(restaurant.whatsapp)
    const [colorHeader, setColorHeader] = useState(restaurant.colorHeader)
    const [colorDetails, setColorDetails] = useState(restaurant.colorDetails)
    const [image, setImage] = useState(restaurant?.logo?.includes("base64"))
    const [viewImage, setViewImage] = useState(restaurant.logo)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const HandleUpdateDataRestaurante = async () => {
        try{
            setLoading(true)
            await updateDataRestaurante(name, email, telephone, whatsapp, colorHeader, colorDetails, image)
            await loadRestautant()
            navigate('/home')
        } catch(err) {
            console.log(err)
        }
    }

    const newImage = async (file) => {
        try{
            const base64 = await convertToBase64(file)
            setViewImage(base64)
            setImage(file)
        } catch(err) {
            console.log(err)
            setImage("")
            setViewImage(null)
        }
    }

    if(loading){
        return <Loading />
    }

    return (
        <StyledUpdateDataRestaurante>
            <h1>{`Atualizar dados`}</h1>
            <hr/>
            <div className="form">
                <div className="field">
                    <label>Nome</label>
                    <Input 
                        type="text"
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <Input 
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="field">
                    <label>Telefone</label>
                    <Input 
                        type="number"
                        onChange={e => setTelephone(e.target.value)}
                        value={telephone}
                    />
                </div>
                <div className="field">
                    <label>WhatsApp</label>
                    <Input 
                        type="number"
                        onChange={e => setWhatsapp(e.target.value)}
                        value={whatsapp}
                    />
                </div>
                <div className="field">
                    <label>Cor do cabeçalho</label>
                    <input 
                        type="color"
                        onChange={e => setColorHeader(e.target.value)}
                        value={colorHeader}
                    />
                </div>
                <div className="field">
                    <label>Cor dos detalhes</label>
                    <input 
                        type="color"
                        onChange={e => setColorDetails(e.target.value)}
                        value={colorDetails}
                    />
                </div>
                <div className="field">
                    <label>Logo</label>
                    {!viewImage || <img src={viewImage} width="200x" alt="image" />}
                    <input 
                        type="file"
                        accept="image/png,image/jpeg"
                        onChange={e => newImage(e.target.files[0])}
                    />
                    {!viewImage || 
                        <Button onClick={() => {
                            setViewImage(null)
                            setImage(null)
                        }} 
                        style={{height: "25px"}}>Excluir Logo</Button>}
                </div>
                <div className="actions">
                    <Button onClick={() => HandleUpdateDataRestaurante()}>Atualizar</Button>
                    <Button onClick={() => navigate('/home')}>Cancelar</Button>
                </div>
            </div>
        </StyledUpdateDataRestaurante>
    )
}

export default UpdateDataRestaurante;