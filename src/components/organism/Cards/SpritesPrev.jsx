import React from 'react'
import { PropsValue } from '../../atoms/Text'

const SpritesPrev = ({ sprites }) => {
    return (
        <React.Fragment>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <img src={sprites?.front_default} width={80} height={80} alt="sprites" />
                    <PropsValue>Front Default</PropsValue>
                </div>
                <div>
                    <img src={sprites?.front_shiny} width={80} height={80} alt="sprites" />
                    <PropsValue>Front Shiny</PropsValue>
                </div>
                <div>
                    <img src={sprites?.back_default} width={80} height={80} alt="sprites" />
                    <PropsValue>Back Default</PropsValue>
                </div>
                <div className="">
                    <img src={sprites?.back_shiny} width={80} height={80} alt="sprites" />
                    <PropsValue>Back Shiny</PropsValue>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SpritesPrev