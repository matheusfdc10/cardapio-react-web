import Styled from "styled-components";

export const StyledUpdateDish = Styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    transition: .6s;

    > .container {
        flex: 1;

        > h1 {
            margin-bottom: 10px;
        }

        > .form {
            display: flex;
            flex-direction: column;
            margin-top: 16px;
            gap: 16px;

            > .field {
                display: flex;
                gap: 10px;
                padding-right: 8px;
                
                > textarea {
                    width: 100%;
                    border-radius: 15px;
                    min-height: 25px;
                    padding: 8px;
                    border: none;
                    box-shadow: 0 0 5px #0004;
                    :focus {
                        outline: 0;
                        box-shadow: 0 0 5px #0008;
                    }
                }

                > .radio {
                    display: flex;
                    text-align: left;
                    gap: 5px;
                }
                /* margin: 10px; */

                .file {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    padding: 5px 10px;
                    border: none;
                    border-radius: 15px;
                    box-shadow: 0 0 5px #0004;
                    cursor: pointer;
                    flex-shrink: 0;
                    background: ${({theme}) => theme.buttonColor};
                    color: ${({theme}) => theme.textColor};
                    transition: .6s;
                    height: 25px;
                    font-size: 13.3333px;
                    font-family: 'Arial';

                    :hover {
                        background-color: #8d8d8d45;
                    }
                }

                > input[type='file'] {
                    display: none;
                }
            }
        }
    }

    > .actions {
        display: flex;
        justify-content: end;
        gap: 10px;
    }
`