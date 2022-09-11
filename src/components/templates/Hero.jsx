import React from 'react'
import styled from 'styled-components'
import { Container } from '../atoms/Container'

const HeroHeading = styled.h1`
    font-size: 50px;
    color: ${({ theme }) => theme.text};
`

const HeroHeight = styled.div`
    height: 550px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ButtonAction = styled.button`
    font-size: 20px;
    font-weight: bold;
    padding: 20px 40px;
    border: none;
    background: #0EA5E9;
    color: #FFF;
    border-radius: 16px;
    margin: 20px 0 0 0;
    &:hover {
        cursor: pointer;
    }
`

const HeadingWrapper = styled.div`
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
`

const Subheading = styled.p`
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    line-height: 1.5;
    max-width: 700px;
    margin: 20px 0;
`

const Hero = ({ pokeSection }) => {
    const PokemonReff = ref => {
        window.scrollTo({
            top: ref.offsetTop + -10,
            left: 0,
            behavior: 'smooth'
        })
    }
    return (
        <React.Fragment>
            <Container>
                <HeroHeight>
                    <HeadingWrapper>
                        <HeroHeading>Find and explore your favourite Pokemon</HeroHeading>
                        <Subheading>Pokémon an abbreviation for Pocket Monsters in Japan is a Japanese media franchise managed by The Pokémon Company a company founded by Nintendo, Game Freak, and Creatures. The franchise was created by Satoshi Tajiri in 1996 and is centered on fictional creatures called "Pokémon"</Subheading>
                        <ButtonAction onClick={() => PokemonReff(pokeSection.current)}>Get started</ButtonAction>
                    </HeadingWrapper>
                </HeroHeight>
            </Container>
        </React.Fragment>
    )
}

export default Hero