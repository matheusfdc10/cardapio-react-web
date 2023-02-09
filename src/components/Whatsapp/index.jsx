import { StyledWhatsapp } from "./style";
import { BsWhatsapp } from 'react-icons/bs';
const number = 21999999999
const Whatsapp = () => {
    return(
        <StyledWhatsapp href={`https://wa.me/55${number}`}>
            <BsWhatsapp />
        </StyledWhatsapp>
    )
}

export default Whatsapp;