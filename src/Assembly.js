import React, { useState, useEffect } from 'react'
import { Nav } from './Components/Nav'
import { Routing } from './Routing'
import mainLogo from './Images/mainLogo.png'
import './CSS/Header.css'
import {LoginRegisterButtons} from './Components/LoginRegisterButtons'
import {LoggedInUser} from './Components/LoggedInUser'

export const Assembly = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkForUser = () => {
        if (sessionStorage.getItem("nexusUser") === null) {
            setIsLoggedIn(false)
        } else {
            setIsLoggedIn(true)
        }
    }

    const handleLogOut = event => {
        event.preventDefault()
        sessionStorage.clear()
        setIsLoggedIn(false)
    }


    const toggleLogin = () => {
        if (isLoggedIn) {
            setIsLoggedIn(false)
        } else {
            setIsLoggedIn(true)
        }
    }

    const toggleRegister = () => {
        if (isLoggedIn) {
            setIsLoggedIn(false)
        } else {
            setIsLoggedIn(true)
        }
    }

    useEffect(() => {
        checkForUser()
    }, [])

    return (
        <>
            <div className="headerContainer">
                <img src={mainLogo} alt="logo" id="mainLogo" />
                {isLoggedIn ? <LoggedInUser handleLogOut={handleLogOut} /> : <LoginRegisterButtons />}
            </div>
            <Nav />
            <Routing toggleRegister={toggleRegister} toggleLogin={toggleLogin} />
        </>
    )
}