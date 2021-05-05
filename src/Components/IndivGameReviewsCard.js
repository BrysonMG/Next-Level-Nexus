import { Button } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { getUserById } from '../DataManagers/UserManager'
import '../CSS/EachGame.css'

export const IndivGameReviewsCard = ({ review }) => {
    const [user, setUser] = useState({ username: "" })
    const currentUserId = parseInt(sessionStorage.getItem("nexusUser"))

    const getUser = () => {
        getUserById(review.userId).then(theUser => {
            setUser(theUser)
        })
    }

    useEffect(() => {
        getUser()
    }, [])

    if (review.review === "") {
        return null
    } else {
        return (
            <div className="reviewCard">
                <h4 className="reviewUser">{user.username}</h4>
                {(user.id === currentUserId) ?
                    <div className="buttonsBox">
                        <Button id="editReview" variant="contained" color="primary">Edit</Button>
                        <Button id="deleteReview" variant="contained" color="primary">Delete</Button>
                    </div>
                : null}
                <div className="userReview">
                    <p className="reviewText">{review.review}</p>
                </div>
            </div>
        )
    }
}