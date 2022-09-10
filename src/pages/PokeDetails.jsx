import axios from 'axios'
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SkillCard from '../components/organism/Cards/SkillCard'
import { Heading, Subheading } from '../components/atoms/Text'
import { HeadingContent, PropsValue } from '../components/atoms/Text'
import { PropsWrapper, AbilityWrapper, DetailWrapper } from '../components/atoms/Wrapper'
import { AbilityBadge } from '../components/atoms/Badge'
import SpritesPrev from '../components/organism/Cards/SpritesPrev'
import FlavorCard from '../components/organism/Cards/FlavorCard'
import { capitalizeFirstLetter } from '../helper/CapitalizeFirstLetter'

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

    const currentPath = location.pathname

    return (
        <Header>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                    <Heading>{capitalizeFirstLetter(details ? details.name : "")}</Heading>
                    <Subheading>Description about pokemon {details ? details.name : ""}</Subheading>
                </div>
                <h1 style={{ fontSize: "80px", color: "yellow" }}>#{currentPath.substring(currentPath.lastIndexOf("/") + 1, currentPath.length)}</h1>
            </div>
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
                        <div style={{ width: "100%", display: "grid", gridTemplateColumns: "auto auto", gridGap: "12px" }}>
                            <PropsWrapper>
                                <HeadingContent>Information</HeadingContent>
                                <PropsValue>Height : {details.height}</PropsValue>
                                <PropsValue>Weight : {details.weight}</PropsValue>
                                <PropsValue>Base Experience : {details.base_experience}</PropsValue>
                                <PropsValue>Species : {capitalizeFirstLetter(details.species?.name)}</PropsValue>
                            </PropsWrapper>

                            <PropsWrapper>
                                <HeadingContent>Sprites Preview</HeadingContent>
                                <SpritesPrev sprites={details.sprites} />
                            </PropsWrapper>
                        </div>

                        <PropsWrapper>
                            <HeadingContent>Skills</HeadingContent>
                            {details.abilities?.map((item) => (
                                <SkillCard skills={item.ability?.url} />
                            ))}
                        </PropsWrapper>

                        <PropsWrapper>
                            <HeadingContent>Flavour</HeadingContent>
                            {details.abilities?.map((item) => (
                                <FlavorCard flavors={item.ability?.url} />
                            ))}
                        </PropsWrapper>
                    </AbilityWrapper>
                </div>
            </DetailWrapper>
        </Header >
    )
}

export default PokeDetails