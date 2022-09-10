import React from 'react'
import useSWR from 'swr'
import { PropsValue } from '../../atoms/Text'
import { urlFetcher } from '../../../helper/urlFetcher'

const FlavorCard = ({ flavors }) => {
    const { data, error } = useSWR(() => flavors, urlFetcher)
    return (
        <React.Fragment>
            <div style={{ display: "grid", gridTemplateColumns: "auto auto", margin: "10px 0" }}>
                {data ? data.flavor_text_entries?.slice(1, 5).map((flavor) => {
                    return (
                        <div style={{ margin: "0" }}>
                            <PropsValue>{flavor.flavor_text}</PropsValue>
                        </div>
                    )
                }) : "Loading ..."}
            </div>
        </React.Fragment>
    )
}

export default FlavorCard