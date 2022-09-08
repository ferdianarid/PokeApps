import styled from "styled-components"

export const SearchField = styled.input`
        border: none;
        padding: 14px 16px;
        color: #FFF;
        border-radius: 12px;
        font-size: 20px;
        background: rgb(31, 28, 48);
        &:focus {
            outline: none;
        }
        @media only screen and (max-width: 768px) {
            display: none;
        }
        
    `