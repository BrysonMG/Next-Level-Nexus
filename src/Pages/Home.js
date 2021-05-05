import React, {useState, useEffect} from 'react'
import { News } from '../Components/News'
import { RecentlyAdded } from '../Components/RecentlyAdded'

export const Home = ({logout, login}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const checkAuth = () => {
        const user = sessionStorage.getItem("nexusUser")
        if (user === null) {
            setIsLoggedIn(false)
        } else {
            setIsLoggedIn(true)
        }
    }

    useEffect(() => {
        checkAuth()
    }, [login, logout])

    return (
        <>
            <News />
            {isLoggedIn ? <RecentlyAdded /> : null}
        </>
    )
}