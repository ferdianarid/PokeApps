import React from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PokeCard = ({ title, pokemonId }) => {
    const CardContainer = styled.div`
        width: 100%;
        border-radius: 16px;
        padding: 8px 8px 16px 8px;
        background: ${({ theme }) => theme.body};
        &:hover {
            cursor: pointer;
        }
    `
    const CardContent = styled.div`
        padding-top: 14px;
        text-align: center;
    `
    const CardTitle = styled.h1`
        font-size: 24px;
        width: fit-content;
        margin: 0 auto;
        border-radius: 25px;
        padding: 6px 18px;
        background: ${({ theme }) => theme.togglerColor};
        color: ${({ theme }) => theme.text};
        text-transform: capitalize;
    `
    return (
        <React.Fragment>
            <Link to={`/pokemon/${pokemonId}`} style={{ textDecoration: "none" }}>
                <Tilt>
                    <CardContainer className="card-container">
                        <img src={`https://img.pokemondb.net/artwork/large/${title}.jpg`} width="100%" height="200px" style={{ borderRadius: "8px", objectFit: "cover" }} />
                        <CardContent>
                            <CardTitle>{title}</CardTitle>
                        </CardContent>
                    </CardContainer>
                </Tilt>
            </Link>
        </React.Fragment >
    );
};

export default PokeCard