import React, { FunctionComponent, useEffect } from "react"
import axios from "axios"
import { API_URL } from "../App"
import { linkResponse } from '../shared/apiResponses'
import { generateDisplayShortenedLink } from '../components/linkDisplay'
axios.defaults.withCredentials = true;


export const LoginView = () => {
    //declare states
    const [ username, setUsername ] = React.useState("")
    const [ password, setPassword ] = React.useState("")
    const [ loginStatus, setLoginStatus] = React.useState("Please log in")
    const [ links, setLinks ] = React.useState(Array<JSX.Element>)
    //auto refresh
    useEffect(() => {}, [loginStatus, links])

    //input handlers
    const handleUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        axios.post(`${API_URL}/login`, {
                username: username,
                password: password
        })
        .then(res => { // handle success
            localStorage.setItem("username", res.data.username)
            setLoginStatus(`Welcome ${localStorage.getItem("username")}!`)
            window.location.replace('/account')
        }) //handle error
        .catch(err => setLoginStatus(`Invalid login for ${username}`))
        
    }

    const getCookieTest = () => {
        axios.get(`${API_URL}/getcookies`, {})
        .then(res => console.log(res))
    }

    const handleGetUserLinks = () => {
        axios.get(`${API_URL}/getlinks/${localStorage.getItem("username")}`)
        .then(res => generateDisplayShortenedLink(res.data))
        .then(arr => setLinks(arr))
    }
    
    return (
        <div style={{textAlign: "center"}}>
            <input onChange={handleUsernameInput} placeholder='username' />
            <br /> <br />
            <input onChange={handlePasswordInput} type='password' placeholder="password"/> <br /> <br />
            <button onClick={handleSubmit}>Login</button> <br />
            <p>{loginStatus}</p>
            <button onClick={() => window.location.replace(`/`)}>Home</button> <br />
            <button onClick={getCookieTest}>Get Cookies</button> <br />
            <button onClick={handleGetUserLinks}>Get Links</button> <br />
            <div>
                {links} 
            </div>
        </div>
    )
}