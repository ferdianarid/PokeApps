import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Heading, Subheading } from '../components/atoms/Text'
import { Container } from '../components/atoms/Container'

const PokeDetails = () => {
    const location = useLocation()

    const [details, setDetails] = useState('')

    const Header = styled.div`
        margin: 16px 0px;
        padding: 0px 100px;
        @media only screen and (max-width: 768px) {
            padding: 0 20px;
        }
    `
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2${location.pathname}`)
            .then((response) => setDetails(response.data))
    }, [location.pathname])

    const capitalizeFirstLetter = (string) => {
        return string?.charAt(0).toUpperCase() + string?.slice(1);
    }

    const DetailWrapper = styled.div`
        padding: 40px 0px;
    `

    const HeadingContent = styled.h3`
        color: #FFF;
    `

    const TextContent = styled.p`
        color: #FFF;
        font-size: 14px;
    `

    const AbilityBadge = styled.p`
        color: #FFF;
        font-size: 14px;
        padding: 8px 16px;
        border-radius: 8px;
        background: blue;
        height: fit-content;
    `

    const AbilityWrapper = styled.div`
        display: flex;
        flex-direction: column;
        grid-gap: 12px;
    `

    console.log(details)
    return (
        <Header>
            <Heading>{capitalizeFirstLetter(details ? details.name : "")}</Heading>
            <Subheading>Description about pokemon {details ? details.name : ""}</Subheading>
            <DetailWrapper>
                <div style={{ display: "flex", gridGap: "20px" }}>
                    <img src={`https://img.pokemondb.net/artwork/large/${details.name}.jpg`} width="250px" height="200px" style={{ borderRadius: "8px" }} />
                    <AbilityWrapper>
                        <HeadingContent>Abilities</HeadingContent>
                        <div style={{ display: "flex", alignItems: "center", gridGap: "8px" }}>
                        {details.abilities?.map((item) => (
                            <AbilityBadge>{item.ability.name}</AbilityBadge>
                        ))}
                        </div>
                    </AbilityWrapper>
                </div>
            </DetailWrapper>
        </Header>
    )
}

export default PokeDetails