import { StyledInput } from "./style";

const Input = ({ children, type, name, id, ...restProps}) => {
    return <StyledInput type={type} name={name} id={id} {...restProps} >
        {children}
    </StyledInput>
}

export default Input;