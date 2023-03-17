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
        background-color: ${({theme}) => theme.background};
        transition: .6s;
        
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
                background: ${({theme}) => theme.backgroundContainer};
                color: ${({theme}) => theme.textColor};
                transition: .6s;
                
                display: grid;


                table, thead, tbody, tr, td, th{
                    border-top: 1px solid ${({theme}) => theme.textColor};
                    border-bottom: 1px solid ${({theme}) => theme.textColor};
                }

                textarea {
                    background: ${({theme}) => theme.inputColor};
                    color: ${({theme}) => theme.textColor};
                    transition: .6s;
                }

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