import axios from "axios"
import React, { useEffect, useState } from "react"
import { API_URL } from "../App"




export const AccountView = () => {
    const [ user, setUser ] = React.useState('')
    const [ message, setMessage ] = React.useState('Loading')
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
        if (user) {
            setMessage(`Hey ${user}`)
        }
    }, [user])
    
    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
}