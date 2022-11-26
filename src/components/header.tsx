import React from "react"
import axios from "axios"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { API_URL } from "../App"


interface headerButtonProps {
    label: string
    route: string
}

const HeaderButton = (props: headerButtonProps) => {

    return (
        <Link to={props.route} className="bg-secondary-left-200 rounded mx-2 h-1/2 hover:bg-secondary-left-100 
        px-3 flex items-center border-2 border-secondary-left-200">
           <p className="lg:text-sm">{props.label}</p>
        </Link> 
    )
}

export const Header = () => {
    //if user is logged in, display logout instead of create account
    var [ accountManagementLabel, setAccountManagementLabel ] = React.useState("Create Account")
    const [ accountManagementRoute, setAccountManagementRoute ] = React.useState("/signup")
    
    useEffect(() => {
        axios.get(`${API_URL}/auth`)
        .then((res) => {
            console.log(res.data.loggedIn)
            if (res.data.loggedIn) {
                setAccountManagementLabel("Log Out")
                setAccountManagementRoute("/logout")
            }
            console.log(accountManagementLabel)
        })
    }, [accountManagementLabel, accountManagementRoute])

    return (
        <div className="bg-secondary-left-400 h-[4.5rem] flex flex-row justify-between items-center shadow-xl">
            <HeaderButton label={'Home'} route={'/'}/>
            <HeaderButton label={'My Links'} route={'/account'} />
            <HeaderButton label={accountManagementLabel} route={accountManagementRoute}/>
        </div>
    )
}