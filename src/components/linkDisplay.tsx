import { linkResponse } from '../shared/apiResponses'
import { FunctionComponent } from 'react'
import { THIS_URL } from '../shared/constants'

interface linkDisplayProps {
    key: string,
    originalUrl: string
    numVisits: number,
}

export const DisplayShortenedLink = (props: linkDisplayProps) => {
    //add ... if link over len 45
    var padding = ""
    if (props.originalUrl.length > 45) {
        padding = "..."
    }

    return (
        <div key={props.key} className="bg-secondary-right-300 my-2 mx-5 p-2 flex justify-between border rounded">
            <span>
                <a href={`${THIS_URL}/${props.key}`}>{`${THIS_URL}/${props.key}`}</a> {'->'} {props.originalUrl.substring(0, 45)}{padding}
            </span>
            <span>  
                Visitors: {props.numVisits} 
            </span>
        </div>
    )
}
// takes in arr of linkResponse and outputs Arr of DisplayShortenedLink
export const DisplayShortenedLinkGroup = (props: {links: Array<linkResponse>}) => {
    var newElements = new Array<JSX.Element>
    props.links.forEach(link => {
        const element = DisplayShortenedLink({key: link.key, originalUrl: link.original_url, numVisits: link.num_visits})
        newElements.push(element)
    })

    return  (
            <div className="bg-secondary-right-400 w-1/2 rounded shadow-xl">
                {newElements}
            </div>
    )
}