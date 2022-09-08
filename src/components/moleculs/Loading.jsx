import React from 'react'
import styled from 'styled-components'
import pokeBall from '../../assets/pokeball.png'

const Loading = () => {
    const Loading = styled.div`
        max-width: 500px;
        margin 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

    const LoadingTitle = styled.h1`
        color: #FFF;
        margin-top: 16px;
    `
    return (
        <React.Fragment>
            <Loading>
                <img className="pokeball" src={pokeBall} width={200} height={200} alt="pokeball" />
                <LoadingTitle>Loading ... </LoadingTitle>
            </Loading>
        </React.Fragment>
    )
}

export default Loading