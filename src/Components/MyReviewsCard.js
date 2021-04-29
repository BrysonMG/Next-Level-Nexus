import React, { useState, useEffect } from 'react'
import { getGameById } from '../DataManagers/RawgManager'
import '../CSS/MyReviews.css'

export const MyReviewsCard = ({ userGame }) => {
    const [review, setReview] = useState({ gameTitle: "", review: "", background_image: "" })

    const getGameTitle = () => {
        const copy = { ...review }
        copy.review = userGame.review
        getGameById(userGame.gameId).then(game => {
            copy.gameTitle = game.name
            if (game.background_image === null) {
                copy.background_image = 'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/3/3/2/7/237233-6-eng-GB/Cosmoprof-Asia-Ltd-SIC-Cosmetics-20132_news_large.jpg'
            } else {
                copy.background_image = game.background_image
            }
            setReview(copy)
        })
    }

    useEffect(() => {
        getGameTitle()
    }, [])

    return (
        <div className="myReviewsCard">
            <img className="myReviewsImg" src={review.background_image} alt="game" />
            <div className="reviewTextBox">
                <h2 className="myReviewsGame">{review.gameTitle}</h2>
                <p className="myReviewsContent">{review.review}</p>
            </div>
        </div>
    )
}