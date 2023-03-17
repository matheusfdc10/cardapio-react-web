import Styled from "styled-components";

export const StyledInput = Styled.input`
    width: 100%;
    border-radius: 15px;
    height: 25px;
    padding-left: 8px;
    border: none;
    box-shadow: 0 0 5px #0004;
    background: ${({theme}) => theme.inputColor};
    color: ${({theme}) => theme.textColor};
    transition: .6s;

    :focus {
        outline: 0;
        box-shadow: 0 0 5px #0008;
    }
`