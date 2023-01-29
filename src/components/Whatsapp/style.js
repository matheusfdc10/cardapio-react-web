import Styled from "styled-components";

export const StyledWhatsapp = Styled.a`
    display: flex;
    flex-direction: center;
    align-items: center;
    position: fixed;
    background-color: #34af23;
    right: 0px;
    bottom: 0px;
    padding: 12px;
    border-radius: 50%;
    margin-bottom: 10px;
    margin-right: 10px;
    box-shadow: 0 0 10px #0003;
    cursor: pointer;
    color: black;

    :hover {
        box-shadow: 0 0 5px #0004;
        color: white;
    }

    > svg {
        width: 35px;
        height: 35px;
    }
`