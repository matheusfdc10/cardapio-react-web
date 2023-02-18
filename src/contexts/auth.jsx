import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createSession, getRestaurant, getUser } from "../services/api";
// import { getUser } from "../server/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [restaurant, setRestaurant] = useState(null);
  const token = localStorage.getItem('token')

  useEffect(() => {
    loadUser()
    // eslint-disable-next-line
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await createSession(email, password)
      localStorage.setItem("token", data.token);
      await loadUser()
    } catch (err) {
      logout();
      console.log(err);
    }
  };

  const loadUser = async () => {
    try {
      const { data } = await getUser();
      setUser(data);
      await loadRestautant()
    } catch (err) {
      logout();
      console.log(err);
    }
  };

  const loadRestautant = async () => {
    try {
      const { data } = await getRestaurant()
      setRestaurant(data);
      if(location.pathname.includes("login")){
        navigate("/home");
      }
      setLoading(false)
    } catch (err) {
      logout()
      console.log(err)
    }
  }

  const logout = async () => {
    try {
      localStorage.removeItem("token");
      setUser(null);
      if(!location.pathname.includes("menu")){
        navigate("/menu");
      }
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: Boolean(user),
        loading,
        user,
        restaurant,
        login,
        loadRestautant,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}