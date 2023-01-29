import { StyledButton } from "./style";

const Button = ({children, ...restProps}) => {
    return <StyledButton  {...restProps}>
        {children}
    </StyledButton>
}

export default Button;