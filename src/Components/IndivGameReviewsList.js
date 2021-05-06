import { Button } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCollection } from '../DataManagers/CollectionManager'
import { IndivGameReviewsCard } from './IndivGameReviewsCard'
import '../CSS/EachGame.css'

export const IndivGameReviewsList = ({render}) => {
    const [reviews, setReviews] = useState([])
    const { gameId } = useParams()
    const currentUserId = parseInt(sessionStorage.getItem("nexusUser"))
    const [reviewExists, setReviewExists] = useState(false)

    const getThisGamesReviews = () => {
        getCollection().then(allReviews => {
            const thisGameOnly = allReviews.filter(review => {
                return review.gameId === parseInt(gameId)
            })
            setReviews(thisGameOnly)
        })
    }

    const checkForReview = () => {
        fetch(`http://localhost:8088/userGames?userId=${currentUserId}&gameId=${parseInt(gameId)}`)
        .then(res=>res.json())
        .then(res=>res[0])
        .then(thisReviewObj => {
            if (thisReviewObj?.review === "") {
                setReviewExists(false)
            } else {
                setReviewExists(true)
            }
        })
    }

    const reload = () => {
        getThisGamesReviews()
        checkForReview()
    }

    useEffect(() => {
        getThisGamesReviews()
        checkForReview()
    }, [render])

    return (
        <div className="reviewSection">
            <div className="reviewHeaderBox">
                <h1 className="reviewTitle">Reviews</h1>
                {reviewExists ? null : <Link to={`/Reviews/Create/${gameId}`}><Button id="writeReview" variant="contained" color="primary">Write A Review</Button></Link> }
            </div>
            <div className="reviewList">
                {reviews.map(review => {
                    return <IndivGameReviewsCard key={review.id} review={review} reload={reload} />
                })}
            </div>
        </div>
    )
}