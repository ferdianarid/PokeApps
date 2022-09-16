import React, { useEffect, useRef } from 'react'
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
import AOS from 'aos'
import 'aos/dist/aos.css'

const Homepage = () => {
    const PokemonSectionReff = useRef(null)

    const fetcher = async (url) => {
        return await axios.get(url).then((response) => response.data.results)
    }

    const { data, error } = useSWR(() => `https://pokeapi.co/api/v2/pokemon`, fetcher)

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        })
    }, [])
    return (
        <React.Fragment>
            <Hero pokeSection={PokemonSectionReff} />
            <Container>
                <DoubleColumn>
                    <Columns>
                        <SectionHeading data-aos="fade-up" data-aos-delay="800">Pokemon Slogan for the Franchise.</SectionHeading>
                        <Subheading data-aos="fade-up" data-aos-delay="1200">Pokémon, humans, known as Pokémon Trainers, catch and train Pokémon to battle other Pokémon for sport. All media works within the franchise are set in the Pokémon universe. The English slogan for the franchise is "Gotta Catch ‘Em All!</Subheading>
                    </Columns>
                    <Columns>
                        <img src={PokemonImage} className="poke-img" alt="pokemon" />
                    </Columns>
                </DoubleColumn>
            </Container>
            <Container style={{ marginTop: "-80px" }}>
                <SectionHeading ref={PokemonSectionReff} data-aos="fade-up" data-aos-delay="800">Pokemon List</SectionHeading>
                <Subheading style={{ marginTop: "-20px" }} data-aos="fade-up" data-aos-delay="1200">This is pokemon list from pokeapi</Subheading>
                <CardContainer>
                    {data?.map((item, idx) => (
                        <PokeCard key={idx} pokemonId={idx + 1} title={item.name} />
                    ))}
                </CardContainer>
            </Container>
            <Container>
                <FeedbackSection>
                    <div className="text-center">
                        <SectionHeading data-aos="fade-up" data-aos-delay="800">Send your Feedback in here</SectionHeading>
                        <Subheading data-aos="fade-up" data-aos-delay="1200" style={{ margin: "auto", marginTop: "-20px" }}>Your Feedback is very important for growth more better</Subheading>
                        <ButtonAction data-aos="fade-up" data-aos-delay="1800" style={{ marginTop: "50px" }}>Give Feedback</ButtonAction>
                    </div>
                </FeedbackSection>
            </Container>
            <Pagination />
        </React.Fragment>
    )
}

export default Homepage