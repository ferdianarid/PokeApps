import styled from "styled-components"

export const SearchField = styled.input`
        border: none;
        padding: 14px 16px;
        border-radius: 12px;
        font-size: 14px;
        background: ${({ theme }) => theme.searchColor};
        color: ${({ theme }) => theme.text};
        &:focus {
            outline: none;
        }
        @media only screen and (max-width: 768px) {
            display: none;
        }
        
    `