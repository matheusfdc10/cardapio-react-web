import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import { deleteDish, getDishes } from "../../services/api";
import { StyledUpdateTypesDishesPage } from "./style";
import { formatCurrency } from "../../utils/formtCurrency";
import Loading from "../../components/Loading";


const UpdateTypesDishesPage = () => {
    const { name , id } = useParams()
    const [ dishes, setDishes] = useState([])
    const [ loading, setLoading] = useState(true)
    const navigate = useNavigate()
    

    useEffect(() => {
      getAllDishes()
    }, [])

    const getAllDishes = async () =>{
      try{
        const { data } = await getDishes(id)
        setDishes(data)
        setLoading(false)
      } catch(err) {
        console.log(err)
      }
    }

    const handleDeleteDish = async (dishId) => {
      try{
        setLoading(true)
        await deleteDish(dishId, id)
        await getAllDishes()
      } catch(err) {
        console.log(err)
      }
    }

    if(loading){
      return <Loading height='200px' />
    }

  return (
    <StyledUpdateTypesDishesPage>
        <div>
          <h1>{name}</h1>
          <Button style={{height: '30px'}} onClick={() => navigate('/home')}>Voltar</Button>
        </div>
        {/* <hr/> */}
      <table>
        <thead>
          <tr>
            <th className="conteudo">Prato</th>
            <th className="conteudo">Preço</th>
            <th>Ações</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {!dishes.length? navigate('/home') : dishes?.map((dish, i) => (
            <tr key={i}>
              <td className="conteudo">{dish.name}</td>
              <td className="conteudo">{formatCurrency(dish.price)}</td>
              <td>
                <div className="actions">
                {/* onClick={() => navigate(`/newtypedish/${dish.name}`)} */}
                  <Button onClick={() => navigate(`/UpdateTypesDishPage/${id}/UpdateDishPage/${dish._id}`)}>
                    Atualizar
                  </Button>
                  <Button onClick={() => handleDeleteDish(dish._id)}>Exluir</Button>
                </div>
              </td>
              <td className={dish.status === 'ativo'? 'active' :'inactive'}>{dish.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledUpdateTypesDishesPage>
  );
};

export default UpdateTypesDishesPage;
