import Styled from 'styled-components'

export const StyledHeader = Styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: #f5f5f5; */
    /* background-color: #382660; */
    background-color: black;
    min-height: 80px;
    padding: 20px 20px 16px 20px;
    /* box-shadow: 0 0 15px #0004; */
    box-shadow: 0 0 15px #000f;
    z-index: 100;
    transition: .6s;

    .logo {
        display: flex;
        align-items: center;
        gap: 16px;

        > img {
            height: 60px;
            cursor: pointer;
        }

        > h1 {
            color: white;
            cursor: pointer;

            @media (max-width: 500px) {
                font-size: 26px;
            }
        }
    }

    .actions {
        display: flex;
    }

    > button, div button {
        padding: 8px;
        font-size: 16px;
        font-weight: bold;
        margin-left: 20px;
        /* border: none; */
        /* border-radius: 10px; */
        /* box-shadow: 0 0 6px #0003; */
        /* cursor: pointer; */

        /* :hover {
            background-color: white;
        } */

        @media (max-width: 500px) {
            display: none;
        }
    }

    .btn-theme {
        border: none;
        background: transparent;
        font-size: 25px;
        padding: 0;
        margin: 0;
        cursor: pointer;
    }
`