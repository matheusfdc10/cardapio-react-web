import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { getDish } from "../../services/api";
import { formatCurrency } from "../../utils/formtCurrency";
import { StyledDishDetails } from "./style";
import { IoIosArrowBack } from 'react-icons/io';
import Whatsapp from "../../components/Whatsapp";
import { formatarParagrafo } from "../../utils/formatParagraph";

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
        <Header />
            <Container maxwidth={'600px'} flexdirection='column'>
                <StyledDishDetails>
                    {   dish.image ?
                        <div className="image">
                            <button className="btn-back" onClick={() => navigate(-1)}><IoIosArrowBack/></button>
                            <img src={dish.image} />
                        </div>
                        :
                        <button className="btn-back margin-top-0" onClick={() => navigate(-1)}><IoIosArrowBack/></button>
                    }
                    <div className={`box ${!dish.image ? "img-none" : null}`}>
                        <h1>{dish.name}</h1>
                        <p>{formatarParagrafo(dish.description)}</p>
                        <span>{formatCurrency(dish.price)}</span>
                    </div>
                </StyledDishDetails>
            </Container>
            <Whatsapp />
        </>
    );
}

export default DishDetailsPage;