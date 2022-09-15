import styled from "styled-components"

export const SectionHeading = styled.h1`
        font-size: 45px;
        line-height: 1.3;
        color: ${({ theme }) => theme.text};
        margin-bottom: 24px;
    `

export const FeedbackSection = styled.div`
        width: 100%;
        padding: 50px;
        border-radius: 24px;
        background: ${({ theme }) => theme.togglerColor};
        @media only screen and (max-width: 768px) {
            padding: 50px 20px;
            margin-top: -100px;
        }
    `