import { useEffect, useState } from 'react';
import Carousel from '../../components/Carousel';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import Menu from '../../components/Menu';
import Menu2 from '../../components/Menu2';
import Whatsapp from '../../components/Whatsapp';
import { getMenu } from '../../services/api';

function MenuPage() {
    const [titleMenu, setTitleMenu] = useState([])
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

    return (
        <>
            <Header name={restaurante.name}/>
            {loading? <Loading /> :
            <Container maxwidth={'600px'} flexdirection='column'>
                <Carousel items={restaurante.typeDish} setTitleMenu={setTitleMenu} />
                {/* <Menu menu={titleMenu.length === 0? restaurante.typeDish : [titleMenu]}/> */}
                <Menu2 menu={titleMenu.length === 0? restaurante.typeDish : [titleMenu]}/>
            </Container>
            }
            <Whatsapp/>
        </>
    );
}

export default MenuPage;