import { StyledWhatsapp } from "./style";
import { BsWhatsapp } from 'react-icons/bs';

const Whatsapp = ({whatsapp}) => {
    return(
        <StyledWhatsapp href={`https://wa.me/55${whatsapp}`}>
            <BsWhatsapp />
        </StyledWhatsapp>
    )
}

export default Whatsapp;