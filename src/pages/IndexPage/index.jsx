import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Container from "../../components/Container";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { AuthContext } from "../../contexts/auth";
import { IndexStyled, StyledBox, StyledHomePage } from "./style";


const IndexPage = () => {
    const { restaurant } = useContext(AuthContext);
    return (
        <IndexStyled>
            <Header name={restaurant.name} logo={restaurant.logo} colorHeader={restaurant.colorHeader} />

            <div className="body">
                <SideBar />

                <div className="container">
                    <div className="box">
                        <Outlet />
                    </div>
                </div>
            </div>
        </IndexStyled>

        
        // <>
        //     <Header name={restaurant.name} logo={restaurant.logo} colorHeader={restaurant.colorHeader} />
        //     <Container>
        //         <div style={{ display: 'flex' }}>
        //             <SideBar />
        //             <StyledBox>
        //                 <div>
        //                     <Outlet />
        //                 </div>
        //             </StyledBox>
        //         </div>
        //     </Container>
        // </>
    )
}

export default IndexPage;