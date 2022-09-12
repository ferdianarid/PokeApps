import React, { useRef } from 'react'
import useSWR from 'swr'
import styled from 'styled-components'
import axios from 'axios'
import Hero from '../components/templates/Hero'
import { Heading, Subheading } from '../components/atoms/Text'
import { Container, CardContainer } from '../components/atoms/Container'
import PokeCard from '../components/organism/Cards/PokeCard'
import Pagination from '../components/organism/Pagination'
import { Columns, DoubleColumn } from '../components/atoms/Column'
import PokemonImage from '../assets/pokemon/pokebackground.webp'
import { ButtonAction } from '../components/atoms/Button/ButtonAction'

const Homepage = () => {
    const PokemonSectionReff = useRef(null)

    const fetcher = async (url) => {
        return await axios.get(url).then((response) => response.data.results)
    }

    const { data, error } = useSWR(() => "https://pokeapi.co/api/v2/pokemon", fetcher)

    const SectionHeading = styled.h1`
        font-size: 45px;
        line-height: 1.3;
        color: ${({ theme }) => theme.text};
        margin-bottom: 24px;
    `

    const FeedbackSection = styled.div`
        width: 100%;
        padding: 50px;
        border-radius: 24px;
        background: ${({ theme }) => theme.togglerColor};
        @media only screen and (max-width: 768px) {
            padding: 50px 20px;
            margin-top: -100px;
        }
    `
    return (
        <React.Fragment>
            <Hero pokeSection={PokemonSectionReff} />
            <Container>
                <DoubleColumn>
                    <Columns>
                        <SectionHeading>Pokemon Slogan for the Franchise.</SectionHeading>
                        <Subheading>Pokémon, humans, known as Pokémon Trainers, catch and train Pokémon to battle other Pokémon for sport. All media works within the franchise are set in the Pokémon universe. The English slogan for the franchise is "Gotta Catch ‘Em All!</Subheading>
                    </Columns>
                    <Columns>
                        <img src={PokemonImage} className="poke-img" alt="pokemon" />
                    </Columns>
                </DoubleColumn>
            </Container>
            <Container style={{ marginTop: "-80px" }}>
                <SectionHeading ref={PokemonSectionReff}>Pokemon List</SectionHeading>
                <Subheading style={{ marginTop: "-20px" }}>This is pokemon list from pokeapi</Subheading>
                <CardContainer>
                    {data?.map((item, idx) => (
                        <PokeCard key={idx + 1} pokemonId={idx + 1} title={item.name} />
                    ))}
                </CardContainer>
            </Container>
            <Container>
                <FeedbackSection>
                    <div className="text-center">
                        <SectionHeading>Send your Feedback in here</SectionHeading>
                        <Subheading style={{ margin: "auto", marginTop: "-20px" }}>Your Feedback is very important for growth more better</Subheading>
                        <ButtonAction style={{ marginTop: "50px" }}>Give Feedback</ButtonAction>
                    </div>
                </FeedbackSection>
            </Container>
            <Pagination />
        </React.Fragment>
    )
}

export default Homepage