import { useContext, useState } from "react";
import { useNavigate} from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { AuthContext } from "../../contexts/auth";
import { createTypeDishes } from "../../services/api";
import { StyledNewTypeDishPage } from "./style";

const NewTypeDishPage = () => {
    const { restaurant, loadRestautant } = useContext(AuthContext);
    const [title, setTtitle] = useState('')
    const navigate = useNavigate()

    const newTypeDishes = async () => {
        try {
            await createTypeDishes( title, restaurant.id)
            // await loadRestautant()
            navigate('/')
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <StyledNewTypeDishPage>
            <div className="container">
                <h1>Novo Tipo de Prato</h1>
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
                </div>
            </div>
            <div className="actions">
                <Button onClick={() => newTypeDishes()}>Criar</Button>
                <Button onClick={() => navigate('/')}>Cancelar</Button>
            </div>
        </StyledNewTypeDishPage>
    )
}

export default NewTypeDishPage;