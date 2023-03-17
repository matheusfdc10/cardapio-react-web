import Styled from "styled-components";

export const StyledNewTypeDishPage = Styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    transition: .6s;
    
    > .container {
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
                /* margin: 10px; */
            }
        }
    }

    > .actions {
        display: flex;
        justify-content: end;
        gap: 10px;
    }

`