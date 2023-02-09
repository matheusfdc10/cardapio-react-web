import Styled from "styled-components";

export const StyledMenu = Styled.div`
    padding: 10px 20px;

    > div {
        margin-top: 48px;

        :first-of-type {
            margin-top: 20px;
        }

        .title {
            display: flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 0 10px #0003;
            border-radius: 4px;

            > div {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: red;
                /* background-color: #382660; */
                /* background-color: #0249aa;: */
                height: 48px;
                width: 30px;

                > b {
                    color: white;
                    margin-bottom: 4px;
                    font-size: 24px;
                }
            }
        }

        .box {
            display: flex;
            justify-content: space-between;
            align-items: start;
            gap: 12px;

            box-shadow: 0 0 15px #0004;
            margin: 32px 0;
            padding: 16px;
            border-radius: 10px;

            .description {
                flex: 1;
                > h1 {
                    font-size: 18px;
                    /* margin-bottom: 8px; */
                    /* text-align: center; */

                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    display: -webkit-box;
                    overflow: hidden;
                }

                > p {
                    overflow: hidden;
                    color: #5d5d5d;
                    /* margin-top: 8px; */
                    font-family: Gilroy;
                    /* text-align: justify; */
                    word-break: break-word;

                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    display: -webkit-box;
                    overflow: hidden;
                    /* width: 180px; */
                }

                > hr {
                    margin: 10px 0;
                    color: inherit;
                    border: 0;
                    border-top: 1px solid;
                    opacity: .25;
                    width: 100%;
                }

                > span {
                    color: #2dd36f;
                    font-weight: bold;
                    font-size: 18px;
                    align-self: flex-end;
                }
            }

            .image {
                width: 110px;
                height: 70px;
                border-radius: 4px;
                overflow: hidden;
                
                display: flex;
                flex-direction: column;

                align-items: center;

                > img {
                    height: 70px;
                    /* width: 110px; */
                }
            }
        }
    }
`