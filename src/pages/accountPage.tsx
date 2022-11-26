import axios from "axios"
import React, { useEffect, useState } from "react"
import { API_URL } from "../App"
import { Header } from "../components/header"
import { DisplayShortenedLink, DisplayShortenedLinkGroup } from "../components/linkDisplay";
import { linkResponse } from "../shared/apiResponses";

//enable auth with requests
axios.defaults.withCredentials = true;


export const AccountPage = () => {
    const [ user, setUser ] = React.useState('')
    const [ message, setMessage ] = React.useState('Loading')
    const [ links, setLinks ] = React.useState(Array<linkResponse>)
    var test = <h1>Hi</h1>
    //verify user is logged in
    const verifyLogin = async () => {
        await axios.get(`${API_URL}/auth`)
        .then(res => {
            if (!res.data.loggedIn) {
                window.location.replace('/login')
            }
            setUser(res.data.username)
        })
    }

    verifyLogin()

    useEffect(() => {
        var linkELementList = new Array<JSX.Element>
        axios.get(`${API_URL}/getlinks`)
        .then(res => res.data)
        .then((links: Array<linkResponse>) => {
                setLinks(links)
        })
        
    }, [])
    
    return (
        <div>
            <div className="bg-primary w-screen h-max">
                <Header />
                <div className="h-[1rem]" />
                <div className="flex flex-col justify-center items-center mx-5 my-5">
                    <h1 className="text-xl">Your Links</h1>
                    <DisplayShortenedLinkGroup links={links} />
                </div>
            </div>
            <div className="bg-primary"/>
        </div>
    )
}