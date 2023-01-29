import Styled from "styled-components";

export const StyledSideBar = Styled.div`
    min-width: 250px;
    /* min-height: 625px; */
    padding: 0 20px 0 28px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    > button {
        background-color: #f5f5f5;
        border: none;
        padding: 8px 12px;
        font-size: 18px;
        width: 100%;
        text-align: left;
        border-radius: 30px;
        box-shadow: 0 0 12px #0003;
        cursor: pointer;

        :hover {
            box-shadow: 0 0 6px #0007;
        }
    
        :active {
            /* background-color: #d1d1d1; */
            background-color: white;
        }
    }
`