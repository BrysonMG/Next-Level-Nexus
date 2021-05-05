import React, { useState, useEffect } from 'react'
import { Nav } from './Components/Nav'
import { Routing } from './Routing'
import mainLogo from './Images/mainLogo.png'
import './CSS/Header.css'
import {LoginRegisterButtons} from './Components/LoginRegisterButtons'
import {LoggedInUser} from './Components/LoggedInUser'
import {useHistory} from 'react-router-dom'

export const Assembly = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [updater, setUpdater] = useState(false)
    const history = useHistory()

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
        history.push("/")
        if (updater) {
            setUpdater(false)
        } else {
            setUpdater(true)
        }
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
            <Routing toggleRegister={toggleRegister} toggleLogin={toggleLogin} update={updater} />
        </>
    )
}