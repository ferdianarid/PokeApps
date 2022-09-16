import styled from "styled-components"

export const PropsWrapper = styled.div`
        display: flex;
        width: 100%;
        flex-direction: column;
        padding: 10px 20px;
        border-radius 12px;
        background: ${({ theme }) => theme.wrapperColor};
    `

export const AbilityWrapper = styled.div`
        display: flex;
        flex-direction: column;
        grid-gap: 12px;
    `

export const DetailWrapper = styled.div`
        padding: 40px 0px;
    `

export const OAuthWrapper = styled.div`
        display: flex;
        align-items: center;
        grid-gap: 12px;
    `

export const HeadingWrapper = styled.div`
        max-width: 700px;
        margin: 0 auto;
        text-align: center;
    `

export const HeroHeight = styled.div`
        height: 550px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    `