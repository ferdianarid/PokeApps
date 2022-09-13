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

export const MobileNav = styled.div`
        display: none;
        color: ${({ theme }) => theme.text};
        grid-gap: 32px;
        padding: 32px 40px;
        width: 88%;
        border-radius: 28px;
        @media only screen and (max-width: 768px) {
            position: absolute;
            z-index: 50;
            top: 100px;
            left: 20px;
            background: ${({ theme }) => theme.togglerColor};
            display: flex;
            flex-direction: column;
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