import React from 'react'
import styled from 'styled-components'
import { Subheading } from '../../atoms/Text'

const FooterStyled = styled.div`
    width: 100%;
    padding: 30px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.togglerColor};
    @media only screen and (max-width: 768px) {
        padding: 30px 20px;
    }
`

const FooterTitle = styled.h3`
    font-size: 20px;
    color: ${({ theme }) => theme.text};
`

const Footer = () => {
    return (
        <React.Fragment>
            <FooterStyled>
                <FooterTitle>PokeApps</FooterTitle>
                <Subheading>Developed by Ferdian</Subheading>
            </FooterStyled>
        </React.Fragment>
    )
}

export default Footer