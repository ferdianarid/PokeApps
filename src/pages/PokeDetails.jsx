import axios from 'axios'
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SkillCard from '@/components/organism/Cards/SkillCard'
import { Heading, Subheading } from '@/components/atoms/Text'
import { HeadingContent, PropsValue } from '@/components/atoms/Text'
import { PropsWrapper, AbilityWrapper, DetailWrapper } from '@/components/atoms/Wrapper'
import { AbilityBadge } from '@/components/atoms/Badge'
import SpritesPrev from '@/components/organism/Cards/SpritesPrev'
import FlavorCard from '@/components/organism/Cards/FlavorCard'
import { ValueText } from '@/components/atoms/Text'
import { capitalizeFirstLetter } from '@/helper/capitalizeFirstLetter'
import { Header } from '@/components/atoms/Container/Header'
import { DoubleColumn } from '@/components/atoms/Column'

const PokeDetails = () => {
    const location = useLocation()

    const [details, setDetails] = useState('')

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2${location.pathname}`)
            .then((response) => setDetails(response.data))
    }, [location.pathname])

    const currentPath = location.pathname

    const PokeId = styled.h1`
        font-size: 80px;
        color: ${({ theme }) => theme.text};
        @media only screen and (max-width: 768px) {
            font-size: 60px;
            margin-top: 10px;
        }
    `

    const Divider = styled.div`
        display: flex;
        flex-direction: row;
        grid-gap: 20px;
        @media only screen and (max-width: 768px) {
            flex-direction: column;
        }
    `

    return (
        <Header>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                    <Heading>{capitalizeFirstLetter(details ? details.name : "")}</Heading>
                    <Subheading>Description about pokemon {details ? details.name : ""}</Subheading>
                </div>
                <PokeId>#{currentPath.substring(currentPath.lastIndexOf("/") + 1, currentPath.length)}</PokeId>
            </div>
            <DetailWrapper>
                <Divider>
                    <img src={`https://img.pokemondb.net/artwork/large/${details.name}.jpg`} className="img-pokemon" />
                    <AbilityWrapper>
                        <HeadingContent>Abilities</HeadingContent>
                        <div style={{ display: "flex", alignItems: "center", gridGap: "8px" }}>
                            {details.abilities?.map((item) => (
                                <AbilityBadge>{item.ability.name}</AbilityBadge>
                            ))}
                        </div>
                        <DoubleColumn>
                            <PropsWrapper>
                                <HeadingContent>Information</HeadingContent>
                                <PropsValue>Height : <ValueText>{details.height}</ValueText></PropsValue>
                                <PropsValue>Weight : <ValueText>{details.weight}</ValueText></PropsValue>
                                <PropsValue>Base Experience : <ValueText>{details.base_experience}</ValueText></PropsValue>
                                <PropsValue>Species : <ValueText>{capitalizeFirstLetter(details.species?.name)}</ValueText></PropsValue>
                            </PropsWrapper>

                            <PropsWrapper>
                                <HeadingContent>Sprites Preview</HeadingContent>
                                <SpritesPrev sprites={details.sprites} />
                            </PropsWrapper>
                        </DoubleColumn>

                        <PropsWrapper>
                            <HeadingContent>Skills Effect</HeadingContent>
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
                </Divider>
            </DetailWrapper>
        </Header>
    )
}

export default PokeDetails