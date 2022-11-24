import { THIS_URL, API_URL } from '../shared/constants'

interface shortenedAlertProps {
    key: string | null
}

export const ShortenedAlert = (props: shortenedAlertProps) => {
    if (!props.key) {
        return null
    }
    return (
        <div>
            <h1>
                <a href={`${THIS_URL}${props.key}`}>
                    {`${THIS_URL}${props.key}`}
                </a>
            </h1>
        </div>
    )
}