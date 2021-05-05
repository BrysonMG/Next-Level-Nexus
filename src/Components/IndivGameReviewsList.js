import { Button } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getCollection} from '../DataManagers/CollectionManager'
import {IndivGameReviewsCard} from './IndivGameReviewsCard'

export const IndivGameReviewsList = () => {
    const [reviews, setReviews] = useState([])
    const {gameId} = useParams()

    const getThisGamesReviews = () => {
        getCollection().then(allReviews => {
            const thisGameOnly = allReviews.filter(review => {
                return review.gameId === parseInt(gameId)
            })
            setReviews(thisGameOnly)
        })
    }

    useEffect(()=>{
        getThisGamesReviews()
    },[])

    return (
        <div className="reviewSection">
            <h1 className="reviewTitle">Reviews</h1>
            <Button variant="contained" color="primary">Write A Review</Button>
            <div className="reviewList">
                {reviews.map(review => {
                    return <IndivGameReviewsCard key={review.id} review={review} />
                })}
            </div>
        </div>
    )
}