import { StyledWhatsapp } from "./style";
import { BsWhatsapp } from 'react-icons/bs';
const number = 21985718993
const Whatsapp = () => {
    return(
        <StyledWhatsapp href={`https://wa.me/55${number}`}>
            <BsWhatsapp />
        </StyledWhatsapp>
    )
}

export default Whatsapp;