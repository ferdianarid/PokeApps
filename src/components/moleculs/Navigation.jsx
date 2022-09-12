import styled from "styled-components"

export const NavigationBar = styled.div`
        display: flex;
        color: ${({ theme }) => theme.text};
        grid-gap: 32px;
        align-items: center;
        @media only screen and (max-width: 768px) {
            display: none;
        }
    `

export const Navbar = styled.div`
        padding: 30px 100px;
        color: #FFF;
        font-size: 16px;
        display:flex;
        justify-content: space-between;
        align-items:center;
        @media only screen and (max-width: 768px) {
            padding: 30px 20px;
            display:flex;
            justify-content: space-between;
            align-items:center;
        }
    `
export const NavLink = styled.p`
        font-size: 16px;
        font-weight: semibold;
        color: ${({ theme }) => theme.text};
    `