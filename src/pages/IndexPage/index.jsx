import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { AuthContext } from "../../contexts/auth";
import { IndexStyled, StyledBox, StyledHomePage } from "./style";
import themes from "../../themes";
import { ThemeProvider } from 'styled-components'


const IndexPage = () => {
    const themeLocalStorage = localStorage.getItem('theme')
    const [theme, setTheme] = useState(themeLocalStorage || 'light')
    const { restaurant } = useContext(AuthContext);

    const handleChangeTheme = () => {
        setTheme((prevState) => prevState === 'light' ? 'dark' : 'light')
        localStorage.setItem("theme",  themeLocalStorage === 'dark' ? 'light' : 'dark');
    }

    return (
        <ThemeProvider theme={themes[theme]}>
            <IndexStyled>
                <Header name={restaurant.name} logo={restaurant.logo} colorHeader={restaurant.colorHeader} theme={theme} onChangeTheme={handleChangeTheme}/>

                <div className="body">
                    <SideBar />

                    <div className="container">
                        <div className="box">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </IndexStyled>
        </ThemeProvider>    

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