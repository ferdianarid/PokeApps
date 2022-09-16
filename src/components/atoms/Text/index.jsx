import styled from "styled-components"

export const Heading = styled.h2`
        color: ${({ theme }) => theme.text};
    `

export const HeroHeading = styled.h1`
        font-size: 50px;
        color: ${({ theme }) => theme.text};
    `

export const Subheading = styled.p`
    color: ${({ theme }) => theme.text};
    font-size: 16px;
    line-height: 1.7;
    max-width: 700px;
    margin: 20px 0;
`

export const HeadingContent = styled.h3`
        color: ${({ theme }) => theme.text};
        margin-bottom: 0px;
    `

export const PropsValue = styled.p`
        color: ${({ theme }) => theme.text};
        font-weight: 400;
        font-size: 16px;
        margin: 5px 0;
    `

export const ValueText = styled.span`
        color: ${({ theme }) => theme.text};
        font-weight: 600;
        font-size: 16px;
        margin: 5px 0;
    `

export const HighlightText = styled.span`
        padding 6px 12px;
        border-radius: 12px;
        background: ${({ theme }) => theme.togglerColor};
        color: ${({ theme }) => theme.text};
    `