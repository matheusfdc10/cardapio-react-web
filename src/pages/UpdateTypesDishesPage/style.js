import Styled from "styled-components";

export const StyledUpdateTypesDishesPage = Styled.div`
    transition: .6s;
    > div {
        display: flex;
        justify-content: space-between;
    
        > h1 {
            margin-bottom: 10px;
        }
    }

    table {
        width: 100%;

        > thead {
            font-size: 20px;
        }
    }

    table, th, td {
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        border-collapse: collapse;
        padding: 5px;
        text-align: center;
    }

    .conteudo {
        text-align: left;
    }

    .actions {
        display: flex;
        gap: 10px;
        justify-content: center;
        margin: 8px 0;

        /* > div {
            display: flex;
            flex-direction: column;

            > div {
                display: flex;
                text-align: left;
                gap: 5px;
            }
        } */
    }

    .active {
        font-weight: bold;
        color: green;
    }

    .inactive {
        font-weight: bold;
        color: red;
    }
`