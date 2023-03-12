import Styled from "styled-components";

export const StyledSideBar = Styled.div`
    /* width: 20%; */
    overflow-y: auto;
    overflow-x: hidden;
    padding: 12px 16px;
    border-radius: 16px;
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 12px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    transition: .6s;

    .sidebar-btn-toclose {
        display: flex;
        justify-content: end;
        align-items: center;
        
        .btn-toclose {
            height: 40px;
            width: 40px;
            border-radius: 50%;
            /* box-shadow: rgb(0 0 0 / 20%) 0px 0px 8px; */
            align-items: center;
            text-align: center;

            > svg {
                transition: .6s;
                width: 100%;
                height: 100%;
            }
        }
    }

    .sidebar-container-btns {
        display: flex;
        flex-direction: column;
        gap: 16px;
        /* margin-right: 8px; */

        .btn {
            display: flex;
            align-items: center;
            gap: 8px;
            border-radius: 25px;
            box-shadow: rgb(0 0 0 / 20%) 0px 0px 8px;
            padding: 10px;
            overflow: hidden;

            :hover {
                box-shadow: rgb(0 0 0 / 30%) 0px 0px 10px;
                background-color: #cdcdcd33;
            }

            .icon {
                height: 30px;
                width: 30px;

                > svg {
                    width: 30px;
                    height: 30px;
                }
            }

            > span {
                transition: .6s;
                font-size: 19px;
                flex-shrink: 0;
            }
        }
    }






    /* min-width: 250px;
    padding: 0 20px 0 28px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    > button {
        background-color: #f5f5f5;
        border: none;
        padding: 8px 12px;
        font-size: 18px;
        width: 100%;
        text-align: left;
        border-radius: 30px;
        box-shadow: 0 0 12px #0003;
        cursor: pointer;

        :hover {
            box-shadow: 0 0 6px #0007;
        }
    
        :active {
            background-color: white;
        }
    } */
`