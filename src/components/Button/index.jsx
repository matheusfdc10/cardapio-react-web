import { StyledButton } from "./style";

const Button = ({children, fontSize, height, ...restProps}) => {
    return <StyledButton style={{fontSize, height}}  {...restProps}>
        {children}
    </StyledButton>
}

export default Button;