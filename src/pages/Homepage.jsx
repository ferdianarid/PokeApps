import React from 'react'
import useSWR from 'swr'
import styled from 'styled-components'
import axios from 'axios'
import { Heading, Subheading } from '../components/atoms/Text'
import { Container, CardContainer } from '../components/atoms/Container'
import PokeCard from '../components/organism/Cards/PokeCard'
import Pagination from '../components/organism/Pagination'

const Homepage = () => {
    const fetcher = async (url) => {
        return await axios.get(url).then((response) => response.data.results)
    }

    const { data, error } = useSWR(() => "https://pokeapi.co/api/v2/pokemon", fetcher)
    console.log(data)

    const Header = styled.div`
        margin: 16px 0px;
        padding: 0px 100px;
        @media only screen and (max-width: 768px) {
            padding: 0 20px;
        }
    `
    return (
        <React.Fragment>
            <Header>
                <Heading>Pokemon List</Heading>
                <Subheading>This is pokemon list from pokeapi</Subheading>
            </Header>
            <Container>
                <CardContainer>
                    {data?.map((item, idx) => (
                        <PokeCard pokemonId={idx + 1} title={item.name} />
                    ))}
                </CardContainer>
            </Container>
            <Pagination />
        </React.Fragment>
    )
}

export default Homepage