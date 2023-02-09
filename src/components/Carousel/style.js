import Styled from "styled-components";

export const StyledCarousel = Styled.div`

    .carousel{
        overflow: hidden;
        /* box-shadow: 0 0 10px #0001; */

        .inner {
            display: flex;

            .item {
                /* min-height: 32px;
                min-width: 64px; */
                padding: 8px 12px;
                flex-shrink: 0;
                cursor: pointer;
                :active {
                    background-color: white;
                }

                > span {
                    font-weight: bold;
                    font-size: 18px;
                }

            }
        }
    }

    .active {
        /* color: #0249aa; */
        color: red;
    }
    
`