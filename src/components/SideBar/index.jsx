import { useNavigate } from "react-router-dom";
import { StyledSideBar } from "./style";

const SideBar = () => {
    const navigate = useNavigate()

    return(   
        <StyledSideBar>
            <button onClick={() => navigate('/NewTypeDish')}>Adicionar tipo</button>
            <button onClick={() => navigate('/menu')}>Ver cardápio</button>
        </StyledSideBar>
    )
}

export default SideBar;