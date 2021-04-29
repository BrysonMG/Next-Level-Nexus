import React, {useState, useEffect} from 'react'
import {getCollection} from '../DataManagers/CollectionManager'
import {MyReviewsCard} from './MyReviewsCard'
import '../CSS/MyReviews.css'

export const MyReviews = () => {
    const [reviews, setReviews] = useState([])
    const currentUserId = parseInt(sessionStorage.getItem("nexusUser"))

    const getUserReviews = () => {
        getCollection().then(reviews => {
            const onlyUsersReviews = reviews.filter(review => {
                return review.userId === currentUserId
            })
            setReviews(onlyUsersReviews)
        })
    }

    useEffect(()=> {
        getUserReviews()
    },[])

    return (
        <div className="myReviewsContainer">
            <h1 className="myReviewsHeader">My Reviews</h1>
            <div className="myReviewsList">
                {reviews.map(review => {
                    return <MyReviewsCard key={review.id} userGame={review} />
                })}
            </div>
        </div>
    )
}