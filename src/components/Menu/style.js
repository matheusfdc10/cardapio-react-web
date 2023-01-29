import Styled from 'styled-components'

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
            gap: 10px;
            box-shadow: 0 0 10px #0003;
            border-radius: 4px;

            > div {
                display: flex;
                align-items: center;
                justify-content: center;
                /* background-color: red; */
                /* background-color: #382660; */
                background-color: #f9a64a;
                height: 48px;
                width: 30px;

                > b {
                    color: white;
                    margin-bottom: 4px;
                    font-size: 24px;
                }
            }

            > h1 {
                height: 100%;
                font-family: Gilroy;
                color: #5d5d5d;
                overflow: hidden;
                /* text-align: center; */
            }
        }

        > section {
            > div {
                display: flex;
                align-items: center;
                flex-direction: column;
                box-shadow: 0 0 15px #0004;
                margin: 32px 0;
                padding: 16px;
                border-radius: 10px;

                > h1 {
                    margin-bottom: 8px;
                    text-align: center;
                }

                > p {
                    overflow: hidden;
                    color: #5d5d5d;
                    margin-top: 8px;
                    font-family: Gilroy;
                    text-align: justify;
                    word-break: break-word;
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
                    font-size: 19px;
                    align-self: flex-end;
                }
            }
        }
    }
`