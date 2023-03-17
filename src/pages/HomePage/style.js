import Styled from "styled-components";

export const StyledHome = Styled.div`
    transition: .6s;
    > div {
        display: flex;
        justify-content: space-between;
        /* align-items: center; */

        > h1 {
            margin-bottom: 10px;
        }

        .icon {
            transition: .6s;
            color: ${({theme}) => theme.textColor};
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
        margin: 8px 0;;
    }
`