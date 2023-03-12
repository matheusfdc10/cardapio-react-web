import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledSideBar } from "./style";

import { IoIosArrowBack, IoMdSettings} from 'react-icons/io'
import { MdRestaurantMenu, MdExitToApp } from 'react-icons/md'
import { ImHome } from 'react-icons/im'
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const SideBar = () => {
    const { logout } = useContext(AuthContext);
    const [openClose, setOpenClose] = useState(true)
    const navigate = useNavigate()

    return(
        <StyledSideBar
            style={{ 
                borderRadius: openClose ? '50px' : '',
                width: openClose ? '82px' : '280px'
            }}
        >
            <div className='sidebar-btn-toclose'>
                <div className='btn-toclose'>
                    <IoIosArrowBack
                        onClick={() => setOpenClose(!openClose)}
                        style={openClose ? { transform: 'scaleX(-1)' } : {}}
                    />
                </div>
            </div>
            <div className='sidebar-container-btns'>
                <div className='btn' onClick={() => navigate('/home')}>
                    <div className='icon'>
                        <ImHome />
                    </div>
                    <span style={{ display: openClose ? 'none' : 'block' }}>Início</span>
                </div>
                <div className='btn' onClick={() => navigate('/menu')}>
                    <div className='icon'>
                        <MdRestaurantMenu />
                    </div>
                    <span style={{ display: openClose ? 'none' : 'block' }}>Cardápio</span>
                </div>
                <div className='btn' onClick={() => navigate('/UpdateDataRestaurnate')}>
                    <div className='icon'>
                        <IoMdSettings />
                    </div>
                    <span style={{ display: openClose ? 'none' : 'block' }}>Atualizar dados</span>
                </div>
                <div className='btn' onClick={() => logout()}>
                    <div className='icon'>
                        <MdExitToApp />
                    </div>
                    <span style={{ display: openClose ? 'none' : 'block' }}>Sair</span>
                </div>
            </div>

        </StyledSideBar>
    )
}

export default SideBar;