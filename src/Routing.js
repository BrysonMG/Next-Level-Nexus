import React, { useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Login } from './Pages/Login'
import { Register } from './Pages/Register'
import { Home } from './Pages/Home'
import { GameLibrary } from './Pages/GameLibrary'
import { MyStuff } from './Pages/MyStuff'
import { Groups } from './Pages/Groups'
import { CreateGroupForm } from './Components/CreateGroupForm'
import { IndividualGroup } from './Pages/IndividualGroup'
import { GroupEdit } from './Components/GroupEdit'
import { IndividualGame } from './Pages/IndividualGame'
import { CreateReviewForm } from './Components/CreateReviewForm'
import { ReviewEdit } from './Components/ReviewEdit'

export const Routing = ({ toggleLogin, toggleRegister, update }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [login, setLogin] = useState(false)

    const checkAuth = () => {
        const user = sessionStorage.getItem("nexusUser")
        if (user === null) {
            setIsLoggedIn(false)
        } else {
            setIsLoggedIn(true)
        }
    }
    
    const userLoggedIn = () => {
        setIsLoggedIn(true)
        setLogin(true)
    }

    useEffect(() => {
        checkAuth()
    }, [update])

    return (
        <>
            <Route exact path="/">
                <Home logout={update} login={login}/>
            </Route>

            <Route exact path="/Login">
                <Login toggleLogin={toggleLogin} auth={userLoggedIn} />
            </Route>

            <Route exact path="/Register">
                <Register toggleRegister={toggleRegister} auth={userLoggedIn} />
            </Route>

            <Route exact path="/GameLibrary">
                {isLoggedIn ? <GameLibrary /> : <Redirect to="/Login" />}
            </Route>

            <Route exact path="/MyStuff">
                {isLoggedIn ? <MyStuff /> : <Redirect to="/Login" />}
            </Route>

            <Route exact path="/Groups">
                {isLoggedIn ? <Groups /> : <Redirect to="/Login" />}
            </Route>

            <Route exact path="/Groups/Create">
                {isLoggedIn ? <CreateGroupForm /> : <Redirect to="/Login" />}
            </Route>

            <Route exact path="/Groups/:groupId(\d+)">
                {isLoggedIn ? <IndividualGroup /> : <Redirect to="/Login" />}
            </Route>

            <Route exact path="/Groups/Edit/:groupId(\d+)">
                {isLoggedIn ? <GroupEdit /> : <Redirect to="/Login" />}
            </Route>

            <Route exact path="/Games/:gameId(\d+)">
                {isLoggedIn ? <IndividualGame /> : <Redirect to="/Login" />}
            </Route>

            <Route exact path="/Reviews/Create/:gameId(\d+)">
                {isLoggedIn ? <CreateReviewForm /> : <Redirect to="/Login" />}
            </Route>

            <Route exact path="/Reviews/Edit/:gameId(\d+)">
                {isLoggedIn ? <ReviewEdit /> : <Redirect to="/Login"/>}
            </Route>
        </>
    )
}