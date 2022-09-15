import React from 'react'
import styled from 'styled-components'
import { Heading, Subheading } from '@/components/atoms/Text'

const About = () => {
    const Header = styled.div`
        margin: 16px 0px;
        padding: 0px 100px;
        @media only screen and (max-width: 768px) {
            padding: 0 20px;
        }
    `
    return (
        <Header>
            <Heading>About Creator</Heading>
            <Subheading>Description about creator PokeApp</Subheading>
        </Header>
    )
}

export default About