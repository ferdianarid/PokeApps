import styled from "styled-components"

export const Columns = styled.div`
        max-width: 600px;
        @media only screen and (max-width: 768px) {
            width: 100%;
            max-width: 450px;
        }
    `

export const DoubleColumn = styled.div`
        width: 100%;
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 60px;
        @media only screen and (max-width: 768px) {
            grid-template-columns: auto;
        }
    `