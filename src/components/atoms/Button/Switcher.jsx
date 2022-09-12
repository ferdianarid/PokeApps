import styled from 'styled-components'

export const Switcher = styled.button`
        border: none;
        padding: 12px 16px;
        border-radius: 30px;
        font-weight: bold;
        background: ${({ theme }) => theme.togglerColor};
        color: ${({ theme }) => theme.text};
        &:hover {
            cursor: pointer;
        }
    `