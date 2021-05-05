import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import '../CSS/LoginRegister.css'
import { getAllUsers } from '../DataManagers/UserManager'
import { useHistory } from 'react-router-dom'

export const Login =({toggleLogin, auth})=> {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const handleNameInput = event => {
        let name = event.target.value
        setUsername(name)
    }

    const handlePassInput = event => {
        let pass = event.target.value
        setPassword(pass)
    }

    const handleLoginClick = event => {
        event.preventDefault()

        const userObj = {
            username: username,
            pass: password
        }

        getAllUsers().then(allUsers => {
            const loginMatch = allUsers.find(user => user.username === userObj.username && user.pass === userObj.pass)
            if (loginMatch) {
                sessionStorage.setItem("nexusUser", loginMatch.id)
                history.push("/")
                toggleLogin()
                auth()
            } else {
                setUsername("")
                setPassword("")
                alert("Incorrect Login Credentials. Please Try Again or Register")
            }
        })
    }



    return (
        <fieldset className="loginContainer">
            <h2>Please Login</h2>
            <br/>
            <label htmlFor="loginUsername">Username: </label>
            <input value={username} onChange={handleNameInput} type="text" id="loginUsername" name="loginUsername" />
            <br/>
            <label htmlFor="loginPassword">Password: </label>
            <input value={password} onChange={handlePassInput} type="password" id="loginPassword" name="loginPassword" />
            <br/>
            <Button onClick={handleLoginClick} variant="contained" color="primary">Login</Button>
        </fieldset>
    )
}