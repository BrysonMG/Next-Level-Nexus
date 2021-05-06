import { Button } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { getUserById } from '../DataManagers/UserManager'
import '../CSS/EachGame.css'
import { Link, useParams } from 'react-router-dom'
import {editReview} from '../DataManagers/CollectionManager'

export const IndivGameReviewsCard = ({ review, reload }) => {
    const [user, setUser] = useState({ username: "" })
    const currentUserId = parseInt(sessionStorage.getItem("nexusUser"))
    const {gameId} = useParams()

    const getUser = () => {
        getUserById(review.userId).then(theUser => {
            setUser(theUser)
        })
    }

    const handleDeleteReview = event => {
        event.preventDefault()
        fetch(`http://localhost:8088/userGames?userId=${currentUserId}&gameId=${parseInt(gameId)}`)
        .then(res=>res.json())
        .then(res=>res[0])
        .then(thisObj => {
            let submitObj = {
                userId: currentUserId,
                gameId: parseInt(gameId),
                gameTitle: thisObj.gameTitle,
                review: "",
                id: thisObj.id
            }
            editReview(submitObj).then(()=> {
                reload()
            })
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
                        <Link to={`/Reviews/Edit/${parseInt(gameId)}`}><Button id="editReview" variant="contained" color="primary">Edit</Button></Link>
                        <Button id="deleteReview" onClick={handleDeleteReview} variant="contained" color="primary">Delete</Button>
                    </div>
                : null}
                <div className="userReview">
                    <p className="reviewText">{review.review}</p>
                </div>
            </div>
        )
    }
}