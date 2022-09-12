import styled from 'styled-components'

export const OAuthButton = styled.div`
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        grid-gap: 8px;
        border-radius: 12px;
        padding: 12px 16px;
        font-weight: bold;
        background: ${({ theme }) => theme.togglerColor};
        color: ${({ theme }) => theme.text};
        &:hover {
            cursor: pointer;
        }
    `