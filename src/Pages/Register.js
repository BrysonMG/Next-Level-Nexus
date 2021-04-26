import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { addUser, getAllUsers } from '../DataManagers/UserManager'
import { useHistory } from 'react-router-dom'

export const Register =({toggleRegister})=> {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const handleNameChange = event => {
        let nameInput = event.target.value
        setUsername(nameInput)
    }

    const handlePassChange = event => {
        let passInput = event.target.value
        setPassword(passInput)
    }

    const handleClickRegister = event => {
        event.preventDefault()

        const name = username
        const pass = password
        const userAsObj = {
            username: name,
            pass: pass
        }
        addUser(userAsObj).then(()=> {
            getAllUsers().then(allUsers => {
                const justRegistered = allUsers.find(user => (user.username === name && user.pass === pass))
                sessionStorage.setItem("nexusUser", justRegistered.id)
                history.push("/")
                toggleRegister()
            })
        })

    }


    return (
        <fieldset className="registerContainer">
            <h2>Please Register</h2>
            <br/>
            <label htmlFor="registerUsername">Username: </label>
            <input value={username} onChange={handleNameChange} type="text" id="registerUsername" name="registerUsername" />
            <br/>
            <label htmlFor="registerPassword">Password: </label>
            <input value={password} onChange={handlePassChange} type="password" id="registerPassword" name="registerPassword" />
            <br/>
            <Button onClick={handleClickRegister} variant="contained" color="primary">Register</Button>
        </fieldset>
    )
}