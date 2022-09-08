import React from "react";
import Tilt from "react-parallax-tilt";
import styled from "styled-components";

const PokeCard = ({ title }) => {
    const CardContainer = styled.div`
        width: 100%;
        border-radius: 16px;
        padding: 8px 8px 16px 8px;
        background: rgb(31, 28, 48);
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
        color: #FFF;
        text-transform: capitalize;

    `
    return (
        <React.Fragment>
            <Tilt>
                <CardContainer className="card-container">
                    <img src={`https://img.pokemondb.net/artwork/large/${title}.jpg`} width="100%" height="200px" style={{ borderRadius: "8px" }} />
                    <CardContent>
                        <CardTitle>{title}</CardTitle>
                    </CardContent>
                </CardContainer>
            </Tilt>
        </React.Fragment>
    );
};

export default PokeCard