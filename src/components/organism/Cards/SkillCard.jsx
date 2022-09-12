import useSWR from 'swr'
import React from 'react'
import { PropsValue } from '../../atoms/Text'
import { urlFetcher } from '../../../helper/urlFetcher'

const SkillCard = ({ skills }) => {
    const { data, error } = useSWR(() => skills, urlFetcher)
    return (
        <React.Fragment>
            {data ? data.effect_entries?.filter((item) =>
                item?.language.name === "en").map((skill) => {
                    return (
                        <div style={{ margin: "10px 0" }}>
                            <PropsValue>Pure : {skill.effect}</PropsValue>
                            <PropsValue>Short : {skill.short_effect}</PropsValue>
                        </div>
                    )
                }) : "Loading ..."}
        </React.Fragment>
    )
}

export default SkillCard