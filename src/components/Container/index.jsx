import { StyledContainer } from "./style";

const Container = ({ children, maxwidth, paddingX, flexdirection}) => {

    return (
        <StyledContainer>
            <div style={{maxWidth: `${maxwidth}`, padding: `0 ${paddingX}`}}>
                { children }
            </div>
        </StyledContainer>
    )
}

export default Container;