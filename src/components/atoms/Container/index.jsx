import styled from "styled-components"

export const Container = styled.div`
        padding: 30px 100px;
        @media only screen and (max-width: 768px) {
            padding: 30px 20px;
        }
    `

export const CardContainer = styled.div`
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-gap: 24px;
        @media only screen and (max-width: 768px) {
            grid-template-columns: auto auto;
            grid-gap: 16px;
        }
    ` 