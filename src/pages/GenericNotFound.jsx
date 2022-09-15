import React from 'react'
import styled from 'styled-components'
import { Container } from '@/components/atoms/Container'
import { Subheading } from '@/components/atoms/Text'
import Pokemon from '@/assets/pokemon/pokemon.png'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const HeadingNotFound = styled.h1`
    font-size: 40px;
`
const HeroNotFoundWrapper = styled.div`
    padding: 70px 30px;
    text-align: center;
`
const GenericNotFound = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 5000)
    }, [])
    return (
        <React.Fragment>
            <Container>
                <HeroNotFoundWrapper>
                    <img src={Pokemon} width={200} height={200} alt="pokemon" style={{ marginBottom: "20px" }} />
                    <HeadingNotFound>Oops, Page Not Found</HeadingNotFound>
                    <Subheading style={{ margin: "0 auto", marginTop: "5px", marginBottom: "30px" }}>Page you visit is not found. Please wait we redirecting automatically to homepage</Subheading>
                </HeroNotFoundWrapper>
            </Container>
        </React.Fragment>
    )
}

export default GenericNotFound