import Styled from "styled-components";


export const IndexStyled = Styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    .body {
        flex: 1;
        display: flex;
        overflow: hidden;
        gap: 16px;
        
        .container {
            flex: 1;
            overflow-y: auto;

            .box {
                min-height: calc(100% - 66px);
                margin: 36px 30px 30px 10px;
                padding: 16px;
                border-radius: 16px;
                box-shadow: rgb(0 0 0 / 20%) 0px 0px 12px;
                overflow-x: auto;

                display: grid;
            }
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