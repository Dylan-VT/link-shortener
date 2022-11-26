import axios from "axios"
import React, { useEffect } from "react"
import { API_URL } from "../shared/constants"
import { Header } from "../components/header"


export const LoginPage = () => {
    //declare states
    const [ username, setUsername ] = React.useState("")
    const [ password, setPassword ] = React.useState("")

    const handleUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    
    const handleLoginSubmit = () => {
        axios.post(`${API_URL}/login`, {
                username: username,
                password: password
        })
        .then((res: any) => { // handle success
            localStorage.setItem("username", res.data.username)
            window.location.replace('/account')
        }) //handle error
        
    }



    return (
        <div className="bg-primary w-screen h-screen">
            <Header />
            <div className="h-1/5"/>
            <div className="flex flex-col items-center h-1/2">
                <div className="flex flex-col justify-center items-center bg-secondary-right-400 w-1/4 h-3/4 shadow-xl rounded-md">
                    <input onChange={handleUsernameInput} placeholder="Username"  className="rounded my-5 w-10/12 h-1/5 pl-1"/> <br />
                    <input onChange={handlePasswordInput} type="password" placeholder="Password" className="rounded my-5 w-10/12 h-1/5 pl-1"/>
                    <button onClick={handleLoginSubmit} className="bg-secondary-right-200 hover:bg-secondary-right-100 w-1/3 h-1/6" >Log In</button>
                </div>
            </div>
        </div>
    )
}