import React from 'react'
import { Button } from '@material-ui/core'
import '../CSS/Header.css'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { useHistory } from 'react-router';

export const LoginRegisterButtons =()=> {
    const history = useHistory()

    const loginClick = () => {
        history.push("/Login")
    }

    const registerClick = () => {
        history.push("/Register")
    }

    return (
        <div className="logRegButtonsContainer">
            <Button onClick={loginClick} variant="contained" color="primary"><ArrowUpwardIcon /> Login</Button>

            <Button onClick={registerClick} style={{ marginLeft: 20 }} variant="contained" color="primary"><PostAddIcon /> Register</Button>
        </div>
    );
}