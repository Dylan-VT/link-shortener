import axios from "axios"
import React, { useEffect } from "react"
import { API_URL } from "../App"


export const Logout = () => {
    //declare states
    const [ username, setUsername ] = React.useState("")
    const [ password, setPassword ] = React.useState("")
    
    useEffect(() => {
        axios.get(`${API_URL}/logout`)
        .then(res => window.location.replace('/'))
    })
    return (
        <div>
            <h1>Bye</h1>
        </div>
    )
}