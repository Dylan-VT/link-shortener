import React from "react"
import axios from "axios"
import { API_URL } from "../App"

const MIN_USERNAME_LENGTH = 5
const MIN_PASSWORD_LENGTH = 9

export const CreateAccountView = () => {
    //declare states
    const [ email, setEmail ] = React.useState("")
    const [ username, setUsername ] = React.useState("")
    const [ password, setPassword ] = React.useState("")

    //input handlers
    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handleUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    //create account handler
    const handleCreateAccountClick = () => {
        //verify data is properly formatted
        if (email.length < 10) {
            window.alert('Invalid email')
            return
        }
        if (username.length < MIN_USERNAME_LENGTH) {
            window.alert(`Username under minimum length of ${MIN_USERNAME_LENGTH}`)
            return
        }
        if (password.length < MIN_PASSWORD_LENGTH) {
            window.alert(`Password under minimum length of ${MIN_PASSWORD_LENGTH}`)
            return
        }
        //send post
        axios.post(`${API_URL}/createaccount`, {
                email: email,
                username: username,
                password: password
        })
        .then(res => {
            window.alert("Account successfully created!")
        })
        .catch(err => { 
            console.log(err.response.data.statusMessage)
            window.alert(`Error creating account: ${err.response.data.statusMessage}`)
        })
    }


    return (
        <div className="signup-page" style={{textAlign: "center"}}>
            <form id='signup-info'>
                <input onChange={handleEmailInput} type='email' placeholder='email' required/> <br /> <br />
                <input onChange={handleUsernameInput} placeholder='username' minLength={5}  maxLength={32} required/> <br /> <br />
                <input onChange={handlePasswordInput} type='password' placeholder="password" minLength={9} maxLength={32} required/> <br /> <br />
                        
                
            </form>
            <p>email: {email}</p>
            <p>username: {username}</p>
            <p>password: {password}</p>

            <button onClick={handleCreateAccountClick} value='Create Account'>Create Account</button>
            
            <button onClick={() => window.location.replace(`/`)}>Home</button>
        </div>  
    )
}