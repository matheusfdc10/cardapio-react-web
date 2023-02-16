import { StyledHeader } from "./style";
// import logo from "../../img/logo2.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import Button from "../Button";

const Header = ({ name, logo, colorHeader}) => {
  const { authenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <StyledHeader style={{backgroundColor: colorHeader}}>
      <div className="logo">
        {
          logo ?
            <img src={logo} alt="logo" onClick={() => navigate('/menu')} />
          :
            <h1 onClick={() => navigate('/menu')}>{name}</h1>
        }
      </div>
      {!authenticated ? (
        <Button onClick={() => navigate("/login")}>Entrar</Button>
      ) : (
        <div>
          <Button onClick={() => navigate("/home")}>Início</Button>
          <Button onClick={() => logout()}>Sair</Button>
        </div>
      )}
    </StyledHeader>
  );
};

export default Header;
