import { linkResponse } from '../shared/apiResponses'
import { FunctionComponent } from 'react'

interface linkDisplayProps {
    key: string,
    originalUrl: string
    numVisits: number,
}

export const DisplayShortenedLink = (props: linkDisplayProps) => {
    return (
        <div key={props.key}>
            {props.key} {'->'} {props.originalUrl} Visitors: {props.numVisits} 
        </div>
    )
}
// takes in arr of linkResponse and outputs Arr of DisplayShortenedLink
export const generateDisplayShortenedLink = (links: Array<linkResponse>) => {
    var newElements = new Array<JSX.Element>
    links.forEach(link => {
        const element = DisplayShortenedLink({key: link.key, originalUrl: link.original_url, numVisits: link.num_visits})
        newElements.push(element)
    })

    return newElements
}