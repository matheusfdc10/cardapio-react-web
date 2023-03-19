import { StyledHeader } from "./style";
// import logo from "../../img/logo2.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import Button from "../Button";
import DarkModeSwitch from "../DarkModeSwitch";

const Header = ({ name, logo, colorHeader, theme, onChangeTheme}) => {
  const { authenticated, logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <StyledHeader style={{backgroundColor: colorHeader}}>
      <div className="logo">
        {
          logo ?
            <img src={logo} alt="logo" onClick={() => navigate(authenticated ? '/' : '/menu')} />
          :
            <h1 onClick={() => navigate(authenticated ? '/' : '/menu')}>{name}</h1>
        }
      </div>
      {(authenticated && location.pathname === '/menu') ? (
          <div className="actions">
            <Button onClick={() => navigate("/")}>Início</Button>
            {/* <Button onClick={() => logout()}>Sair</Button> */}
          </div>
        ) : authenticated ?
            <DarkModeSwitch theme={theme}  onChangeTheme={onChangeTheme} />
            // <button className="btn-theme" onClick={onChangeTheme} >{theme === 'dark' ? '☀️' : '🌑'}</button>
          :
            <Button onClick={() => navigate("/login")}>Entrar</Button>
        }
    </StyledHeader>
  );
};

export default Header;
