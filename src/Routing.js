import React from 'react'
import { Route } from 'react-router-dom'
import { Login } from './Pages/Login'
import { Register } from './Pages/Register'
import { Home } from './Pages/Home'
import { GameLibrary } from './Pages/GameLibrary'
import { MyStuff } from './Pages/MyStuff'
import { Groups } from './Pages/Groups'

export const Routing = ({toggleLogin, toggleRegister}) => {


    return (
        <>
        <Route exact path="/">
            <Home />
        </Route>

        <Route exact path="/Login">
            <Login toggleLogin={toggleLogin} />
        </Route>

        <Route exact path="/Register">
            <Register toggleRegister={toggleRegister} />
        </Route>

        <Route exact path="/GameLibrary">
            <GameLibrary />
        </Route>

        <Route exact path="/MyStuff">
            <MyStuff />
        </Route>

        <Route exact path="/Groups">
            <Groups />
        </Route>

        <Route exact path="/Groups/:groupId(\d+)">

        </Route>

        <Route exact path="/Games/:gameId(\d+)">

        </Route>
        </>
    )
}