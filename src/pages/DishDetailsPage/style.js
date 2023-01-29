import Styled from "styled-components";

export const StyledDishDetails = Styled.div`
    /* background: red; */

    .image {
        /* width: 110px; */
        height: 280px;
        overflow: hidden;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        > img {
            height: 100%;
            /* border-radius: 8px; */
            /* width: 110px; */
            @media (min-width: 500px) {
                    width: 100%;
                }
        }

        > button {
            left:0 ;
            position: absolute;
            margin-top: 24px;
            margin-left: 24px;
            background-color: white;
            border: none;
            border-radius: 50%;
            padding: 4px;
            box-shadow: 0 0 10px #0003;

            :hover {
                color: #0249aa;
                box-shadow: 0 0 5px #0004;
            }

            > svg {
                height: 40px;
                width: 40px;
                margin-top: 2px;
                margin-right: 2px;
            }
        }
    }

    .box {
        display: flex;
        flex-direction: column;
        padding: 18px;
        margin-bottom: 55px;
        

        > h1 {
            text-align: center;
        }

        > p {
            color: #5d5d5d;
            /* margin-top: 8px; */
            font-family: Gilroy;
            /* text-align: justify; */
            word-break: break-word;
            margin-top: 8px;
        }

        > span {
            /* text-align: end; */
            color: #2dd36f;
            font-weight: bold;
            font-size: 24px;
            margin-top: 12px;
        }
    }
`