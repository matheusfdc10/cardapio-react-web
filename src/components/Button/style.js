import Styled from "styled-components";

export const StyledButton = Styled.button`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    border: none;
    border-radius: 15px;
    box-shadow: 0 0 5px #0004;
    cursor: pointer;
    flex-shrink: 0;
    transition: .6s;
    background: ${({theme}) => theme.buttonColor};
    color: ${({theme}) => theme.textColor};

    :hover {
        background-color: #8d8d8d45;
    }
    
    :active {
        /* background-color: #d1d1d1; */
        background-color: white;
    }
`