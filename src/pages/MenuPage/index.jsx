import { useEffect, useState } from 'react';
import Carousel from '../../components/Carousel';
import Container from '../../components/Container';
import Loading from '../../components/Loading';
import Menu2 from '../../components/Menu2';
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
            {loading? <Loading /> :
            <>
                <Container maxwidth={'600px'} flexdirection='column'>
                    <Carousel colorDetails={restaurante.colorDetails} items={restaurante.typeDish} setTitleMenu={setTitleMenu} />
                    {/* <Menu menu={titleMenu.length === 0? restaurante.typeDish : [titleMenu]}/> */}
                    <Menu2 colorDetails={restaurante.colorDetails} menu={titleMenu.length === 0? restaurante.typeDish : [titleMenu]}/>
                </Container>
            </>
            }
            
        </>
    );
}

export default MenuPage;