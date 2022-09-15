import React, { useRef } from 'react'
import useSWR from 'swr'
import axios from 'axios'
import Hero from '@/components/templates/Hero'
import { Subheading } from '@/components/atoms/Text'
import { Container, CardContainer } from '@/components/atoms/Container'
import PokeCard from '@/components/organism/Cards/PokeCard'
import Pagination from '@/components/organism/Pagination'
import { Columns, DoubleColumn } from '@/components/atoms/Column'
import { ButtonAction } from '@/components/atoms/Button/ButtonAction'
import { SectionHeading, FeedbackSection } from '@/components/moleculs/Section'
import PokemonImage from '@/assets/pokemon/pokebackground.webp'

const Homepage = () => {
    const PokemonSectionReff = useRef(null)

    const fetcher = async (url) => {
        return await axios.get(url).then((response) => response.data.results)
    }

    const { data, error } = useSWR(() => process.env.REACT_APP_POKEMON_URL + "/pokemon", fetcher)

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
                        <PokeCard key={idx} pokemonId={idx + 1} title={item.name} />
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