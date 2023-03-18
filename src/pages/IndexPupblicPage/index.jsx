import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Whatsapp from "../../components/Whatsapp";
import { getMenu } from "../../services/api";


const IndexPupblicPage = () => {
    const [restaurante, setRestaurante] = useState({})
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        getRestaurante()
    }, [])

    const getRestaurante = async () => {
        const { data } = await getMenu()
        setRestaurante(data)
        setLoading(false)
    }

    if(loading) {
        return<Loading/>
    }

    return (
        <>
            <Header name={restaurante.name} logo={restaurante.logo} colorHeader={restaurante.colorHeader} />
            <Outlet/>
            <Whatsapp whatsapp={restaurante.whatsapp}/>
        </>
    )
}

export default IndexPupblicPage;