import styled from "styled-components"

export const CollapseButton = styled.div`
        padding: 8px;
        background: ${({ theme }) => theme.togglerColor};
        color: ${({ theme }) => theme.text};
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    `