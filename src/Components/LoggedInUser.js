import React from 'react'
import defaultUser from '../Images/defaultUser.jpg'
import '../CSS/Header.css'
import { Button } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const LoggedInUser = ({handleLogOut}) => {


    return (
        <div className="userAndBtn">
            <div className="userContainer">
                <h4>Username Here</h4>
                <img src={defaultUser} alt="profile" className="profilePic" />
            </div>
            <Button onClick={handleLogOut} style={{ height: 40, marginLeft: 10 }} variant="contained" color="primary"><ExitToAppIcon /> Log Out</Button>
        </div>
    )
}