import { useContext, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { AuthContext } from "../../contexts/auth";
import { updateTypeDish } from "../../services/api";
import { StyledUpdateTypeDishPage } from "./style";

const UpdateTypeDishPage = () => {
    const { restaurant, loadRestautant } = useContext(AuthContext);
    const { name, id } = useParams()
    const [title, setTtitle] = useState(name)
    const navigate = useNavigate()

    const updateTypeDisch = async () => {
        try{
            await updateTypeDish(title, id, restaurant.id)
            await loadRestautant()
            navigate('/home')
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <StyledUpdateTypeDishPage>
            <h1>Atualizar Tipo de Prato</h1>
            <hr/>
            <div className="form">
                <div className="field">
                    <label>Nome</label>
                    <Input 
                        type="text"
                        onChange={e => setTtitle(e.target.value)}
                        value={title}
                    />
                </div>
                <div className="actions">
                    <Button onClick={() => updateTypeDisch()}>Atualizar</Button>
                    <Button onClick={() => navigate('/home')}>Cancelar</Button>
                </div>
            </div>
        </StyledUpdateTypeDishPage>
    )
}

export default UpdateTypeDishPage;