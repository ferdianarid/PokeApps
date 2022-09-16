import React from 'react'
import styled from 'styled-components'
import { HeroContainer } from '../atoms/Container'
import { FaChevronCircleRight } from 'react-icons/fa'
import { Subheading } from '../atoms/Text'
import raticate from '../../assets/pokemon/raticate.png'
import pidgeot from '../../assets/pokemon/pidgeot.png'
import bulbasaur from '../../assets/pokemon/bulbasaur.png'
import ivysaur from '../../assets/pokemon/ivysaur.png'
import { useEffect } from 'react'
import { ButtonAction } from '@/components/atoms/Button/ButtonAction'
import { HighlightText } from '../atoms/Text'
import { HeadingWrapper } from '../atoms/Wrapper'
import { HeroHeading } from '../atoms/Text'
import { HeroHeight } from '../atoms/Wrapper'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = ({ pokeSection }) => {
    const PokemonReff = ref => {
        window.scrollTo({
            top: ref.offsetTop + -10,
            left: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        })
    }, [])
    return (
        <React.Fragment>
            <HeroContainer>
                <HeroHeight>
                    <HeadingWrapper>
                        <HeroHeading data-aos="fade-right" data-aos-delay="1000">Find and explore your favourite <HighlightText>Pokemon</HighlightText></HeroHeading>
                        <Subheading data-aos="fade-right" data-aos-delay="1300">Pokémon an abbreviation for Pocket Monsters in Japan is a Japanese media franchise managed by The Pokémon Company a company founded by Nintendo, Game Freak, and Creatures.</Subheading>
                        <ButtonAction data-aos="fade-up" data-aos-delay="2000" onClick={() => PokemonReff(pokeSection.current)}>See Pokemon <FaChevronCircleRight size={24} style={{ marginLeft: "10px" }} /></ButtonAction>
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