import React from 'react'
import styled from 'styled-components'
import { HeroContainer } from '../atoms/Container'
import { FaChevronCircleRight } from 'react-icons/fa'
import { Subheading } from '../atoms/Text'
import raticate from '../../assets/pokemon/raticate.png'
import pidgeot from '../../assets/pokemon/pidgeot.png'
import bulbasaur from '../../assets/pokemon/bulbasaur.png'
import ivysaur from '../../assets/pokemon/ivysaur.png'

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
    position: relative;
`

const ButtonAction = styled.button`
    font-size: 20px;
    font-weight: bold;
    padding: 20px 40px;
    border: none;
    display: flex;
    align-items: center;
    background: #4f5eff;
    color: #FFF;
    border-radius: 16px;
    margin: 20px auto;
    transition: .2s ease-out;
    &:hover {
        cursor: pointer;
        background: #4150f2;
    }
`

const HeadingWrapper = styled.div`
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
`

const HighlightText = styled.span`
    padding 6px 12px;
    border-radius: 12px;
    background: ${({ theme }) => theme.togglerColor};
    color: ${({ theme }) => theme.text};
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
            <HeroContainer>
                <HeroHeight>
                    <HeadingWrapper>
                        <HeroHeading>Find and explore your favourite <HighlightText>Pokemon</HighlightText></HeroHeading>
                        <Subheading>Pokémon an abbreviation for Pocket Monsters in Japan is a Japanese media franchise managed by The Pokémon Company a company founded by Nintendo, Game Freak, and Creatures.</Subheading>
                        <ButtonAction onClick={() => PokemonReff(pokeSection.current)}>See Pokemon <FaChevronCircleRight size={24} style={{ marginLeft: "10px" }} /></ButtonAction>
                        {/* Image */}
                        <img src={raticate} className="raticate" width={120} alt="raticate" />
                        <img src={pidgeot} className="pidgeot" width={120} alt="pidgeot" />
                        <img src={bulbasaur} className="bulbasaur" width={120} alt="bulbasaur" />
                        <img src={ivysaur} className="ivysaur" width={120} alt="ivysaur" />
                    </HeadingWrapper>
                </HeroHeight>
            </HeroContainer>
        </React.Fragment>
    )
}

export default Hero