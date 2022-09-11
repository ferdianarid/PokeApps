import styled from "styled-components"

export const Heading = styled.h1`
        color: ${({ theme }) => theme.text};
    `

export const Subheading = styled.p`
        color: ${({ theme }) => theme.text};
        line-height: 1.5;
    `

export const HeadingContent = styled.h3`
        color: ${({ theme }) => theme.text};
        margin-bottom: 0px;
    `

export const PropsValue = styled.p`
        color: ${({ theme }) => theme.text};
        font-weight: 600;
        font-size: 16px;
        margin: 5px 0;
    `