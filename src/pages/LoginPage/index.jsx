import { useContext, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Loading from "../../components/Loading";
import { AuthContext } from "../../contexts/auth";
import { StyledLoginPage } from "./style";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("teste");
  const [password, setPassword] = useState("325698");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email, password) => {
    try{
      setLoading(true);
      setPassword("");
      await login(email, password);
      setLoading(false);
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <StyledLoginPage>
          <h1 className="title">Login</h1>
          <div className="form">
            <div className="field">
              <label htmlFor="email">E-mail:</label>
              <Input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="password">Senha:</label>
              <Input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="action">
              <Button onClick={() => handleLogin(email, password)}>
                Entrar
              </Button>
            </div>
          </div>
        </StyledLoginPage>
      )}
    </>
  );
};

export default LoginPage;
