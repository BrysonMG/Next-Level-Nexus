import { Button } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import {getUserById} from '../DataManagers/UserManager'

export const IndivGameReviewsCard = ({review}) => {
    const [user, setUser] = useState({username: ""})

    const getUser = () => {
        getUserById(review.userId).then(theUser => {
            setUser(theUser)
        })
    }

    useEffect(()=>{
        getUser()
    },[])

    return (
        <div className="reviewCard">
            <h4 className="reviewUser">{user.username}</h4>
            <div className="buttonsBox">
                <Button variant="contained" color="primary">Edit</Button>
                <Button variant="contained" color="primary">Edit</Button>
            </div>
        </div>
    )
}