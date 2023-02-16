import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Loading from "./components/Loading";
import { AuthContext, AuthProvider } from "./contexts/auth";
import DishDetailsPage from "./pages/DishDetailsPage";
import HomePage from "./pages/HomePage";
import IndexPage from "./pages/IndexPage";
import IndexPupblicPage from "./pages/IndexPupblicPage";
import LoginPage from "./pages/LoginPage";
import MenuPage from "./pages/MenuPage";
import NewDishPage from "./pages/NewDishPage";
import NewTypeDishPage from "./pages/NewTypeDishPage";
import UpdateDataRestaurante from "./pages/UpdateDataRestaurant";
import UpdateDishPage from "./pages/UpdateDishPage";
import UpdateTypeDishPage from "./pages/UpdateTypeDishPage";
import UpdateTypesDishesPage from "./pages/UpdateTypesDishesPage";

export default function AppRoutes() {
    function Private({ children }) {
      const { authenticated, loading } = useContext(AuthContext);
      if (loading) {
        return <Loading />;
      }
  
      if (!authenticated) {
        return <Navigate to="/login" />;
      }
  
      return children;
    }
  
    return (
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/menu" element={<IndexPupblicPage />} >
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/menu/details/:id" element={<DishDetailsPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/"
              element={
                <Private>
                  <IndexPage />
                </Private>
              }
            >
              <Route path="/home" element={<HomePage />} />
              <Route path="/UpdateDataRestaurnate" element={<UpdateDataRestaurante />} />
              <Route path="/NewTypeDish" element={<NewTypeDishPage />} />
              <Route path="/UpdateTypeDish/:name/:id" element={<UpdateTypeDishPage />} />
              <Route path="/NewDish/:typedish" element={<NewDishPage />} />
              <Route path="/UpdateTypesDishesPage/:name/:id" element={<UpdateTypesDishesPage />} />
              <Route path="/UpdateTypesDishPage/:typeDishId/UpdateDishPage/:dishId" element={<UpdateDishPage />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    );
  }