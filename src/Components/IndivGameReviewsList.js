import { Button } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCollection } from '../DataManagers/CollectionManager'
import { IndivGameReviewsCard } from './IndivGameReviewsCard'
import '../CSS/EachGame.css'

export const IndivGameReviewsList = () => {
    const [reviews, setReviews] = useState([])
    const { gameId } = useParams()

    const getThisGamesReviews = () => {
        getCollection().then(allReviews => {
            const thisGameOnly = allReviews.filter(review => {
                return review.gameId === parseInt(gameId)
            })
            setReviews(thisGameOnly)
        })
    }

    useEffect(() => {
        getThisGamesReviews()
    }, [])

    return (
        <div className="reviewSection">
            <div className="reviewHeaderBox">
                <h1 className="reviewTitle">Reviews</h1>
                <Link to="/Reviews/Create"><Button id="writeReview" variant="contained" color="primary">Write A Review</Button></Link>
            </div>
            <div className="reviewList">
                {reviews.map(review => {
                    return <IndivGameReviewsCard key={review.id} review={review} />
                })}
            </div>
        </div>
    )
}