import Styled from "styled-components";


export const IndexStyled = Styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    .body {
        flex: 1;
        display: flex;
        padding: 36px 30px 30px 30px;
        overflow: hidden;
        gap: 32px;

        .container {
            flex: 1;
            overflow-y: auto;
            overflow-x: auto;
            padding: 16px;
            border-radius: 16px;
            box-shadow: rgb(0 0 0 / 20%) 0px 0px 12px;
        }
    }






    /* flex: 1;
    padding: 0 16px;

    > div {
        padding: 16px;
        background-color: #f5f5f5;
        border-radius: 12px;
        box-shadow: 0 0 12px #0003;
    } */
`