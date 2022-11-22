import React from "react"
import axios from "axios"
import { API_URL } from "../App"

export const LoginView = () => {
    //declare states
    const [ username, setUsername ] = React.useState("")
    const [ password, setPassword ] = React.useState("")
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
        
    }
    return (
        <div>
            <input onChange={handleUsernameInput} placeholder='username' />
            <br /> <br />
            <input onChange={handlePasswordInput} type='password' placeholder="password"/>
            <p>Username: {username}</p>
            <p>Password: {password}</p>
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}