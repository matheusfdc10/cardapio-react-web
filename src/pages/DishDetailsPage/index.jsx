import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../../components/Container";
import Loading from "../../components/Loading";
import { getDish } from "../../services/api";
import { formatCurrency } from "../../utils/formtCurrency";
import { StyledDishDetails } from "./style";
import { IoIosArrowBack } from 'react-icons/io';

const DishDetailsPage = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [dish, setDish] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDishes()
    }, [])

    const getDishes = async () => {
        const response = await getDish(id)
        setDish(response.data)
        setLoading(false)
    }

    if(loading) {
        return <Loading />
    }
    
    return (
        <>
            <Container maxwidth={'600px'} flexdirection='column'>
                <StyledDishDetails>
                    {   dish.image ?
                        <div className="image">
                            <button 
                                className="btn-back"
                                onClick={() => navigate(-1)}
                            >
                                <IoIosArrowBack/>
                            </button>
                            <img src={dish.image} />
                        </div>
                        :
                        <button className="btn-back margin-top-0" onClick={() => navigate(-1)}><IoIosArrowBack/></button>
                    }
                    <div className={`box ${!dish.image ? "img-none" : null}`}>
                        <h1>{dish.name}</h1>
                        <p>{dish.description}</p>
                        <span>{formatCurrency(dish.price)}</span>
                    </div>
                </StyledDishDetails>
            </Container>
        </>
    );
}

export default DishDetailsPage;