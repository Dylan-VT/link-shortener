import axios from "axios";
import React, { useEffect } from "react";
import { API_URL, THIS_URL } from "../shared/constants";
import { ShortenedAlert } from "../components/shortenedAlert";
import { Header } from "../components/header";


export const Home = () => {
    const [ urlToShorten, setUrlToShorten ] = React.useState("");
    const [ shortenedUrl, setShortenedUrl ] = React.useState("")
    const [ shortenedUrlAlert, setShortenedUrlAlert ] = React.useState(ShortenedAlert({key: null}))

    const handleUrlInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrlToShorten(e.target.value);
    }

    const handleShortenButton = async () => {
        axios.post(`${API_URL}/shorten?url=${urlToShorten}`,)
        .then(res => {
            console.log(res.data.key)
            setShortenedUrl(res.data.key)
        })
    }

    useEffect(() => {
        setShortenedUrlAlert(ShortenedAlert({key: shortenedUrl}))
    }, [shortenedUrl])

    return (
        <div className="bg-primary w-screen h-screen">
            <Header/>
            <div className="h-1/5"></div>
            <div className="flex flex-wrap justify-center items-center h-1/8 mt-auto">
                <input onChange={handleUrlInput} className="rounded min-w-1/2 h-1/2 pl-2 mx-5 my-3 shadow-xl" placeholder="https://your-url-to-shorten.com"/>
                
                <button onClick={handleShortenButton}className="
                rounded-lg px-3 h-1/2 bg-secondary-right-400 text-center flex items-center justify-center hover:bg-secondary-right-300 shadow-xl">
                    Shorten
                </button>
            </div>

            <div className="w-screen flex justify-center">
                <span className="rounded-md empty:bg-primary empty:border-primary px-2 py-2 bg-secondary-right-200 border-2 border-secondary-right-300">
                    {shortenedUrlAlert}
                </span>
            </div>
        </div>
    )   
}