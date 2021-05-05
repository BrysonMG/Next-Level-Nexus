import React, { useState, useEffect } from 'react'
import '../CSS/Header.css'
import { Button } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { getUserById } from '../DataManagers/UserManager'

export const LoggedInUser = ({handleLogOut}) => {
    const [user, setUser] = useState({username: ""})
    const currentUserId = parseInt(sessionStorage.getItem("nexusUser"))

    const getUser = () => {
        getUserById(currentUserId).then(user => {
            setUser(user)
        })
    }

    useEffect(()=> {
        getUser()
    },[])

    return (
        <div className="userAndBtn">
            <div className="userContainer">
                <h4>Hello {user.username}!</h4>
            </div>
            <Button onClick={handleLogOut} style={{ height: 40, marginLeft: 10 }} variant="contained" color="primary"><ExitToAppIcon /> Log Out</Button>
        </div>
    )
}