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
    
    :hover {
        box-shadow: 0 0 6px #0007;
    }
    
    :active {
        /* background-color: #d1d1d1; */
        background-color: white;
    }
`