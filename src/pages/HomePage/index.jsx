import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import { AuthContext } from "../../contexts/auth";
import { deletTypeDish } from "../../services/api";
import { StyledHome } from "./style";

const HomePage = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const { restaurant, loadRestautant} = useContext(AuthContext);

    useEffect(() => {
      handleLoadRestaurant()
    }, [])

    const handleLoadRestaurant = async () => {
      try {
        await loadRestautant()
        setLoading(false)
      } catch(err) {
        console.log(err)
      }
    }

    const handleDeleteTypeDish = async (typeDishId, restaurantId) => {
      setLoading(true)
      try{
        await deletTypeDish(typeDishId, restaurantId)
        await loadRestautant()
      } catch(err) {
        console.log(err)
      }
      setLoading(false)
    }

    if(loading){
      return  <Loading height='200px' />
    }

  return (
    <StyledHome>
      <h1>Início</h1>
      {/* <hr/> */}
      <table>
        <thead>
          <tr>
            <th className="conteudo">Tipo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
            {restaurant?.typeDish?.map(TypeDish => (
                <tr key={TypeDish.id}>
                    <td className="conteudo">{TypeDish.name}</td>
                    <td>
                      <div className="actions">
                        <Button onClick={() => navigate(`/NewDish/${TypeDish.id}`)}>Adicionar Prato</Button>
                        {!TypeDish?.dishes.length? null :<Button onClick={() => navigate(`/UpdateTypesDishesPage/${TypeDish.name}/${TypeDish.id}`)}>Atualizar Pratos</Button>}
                        <Button onClick={() => navigate(`/UpdateTypeDish/${TypeDish.name}/${TypeDish.id}`)}>Atualizar Tipo</Button>
                        {TypeDish.dishes.length? null : <Button onClick={() => handleDeleteTypeDish(TypeDish.id, restaurant.id)}>Excluir Tipo</Button>}
                      </div>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </StyledHome>
  );
};

export default HomePage;
