import styled from "styled-components"

export const HeroContainer = styled.div`
    padding: 30px 100px;
    @media only screen and (max-width: 768px) {
        padding: 30px 20px;
    }
`

export const Container = styled.div`
        padding: 100px 100px;
        @media only screen and (max-width: 768px) {
            padding: 100px 20px;
        }
    `

export const CardContainer = styled.div`
        display: grid;
        width: 100%;
        grid-template-columns: auto auto auto auto;
        grid-gap: 12px;
        @media only screen and (max-width: 768px) {
            grid-template-columns: auto;
            grid-gap: 0px;
        }
    `


export const PageWrapper = styled.div`
        max-width: 1440px;
        margin: 0 auto;
    `