import styled from "styled-components"

export const AbilityBadge = styled.p`
        color: ${({ theme }) => theme.text};
        font-size: 14px;
        padding: 8px 22px;
        border-radius: 8px;
        background: ${({ theme }) => theme.wrapperColor};
        height: fit-content;
        width: fit-content;
    `