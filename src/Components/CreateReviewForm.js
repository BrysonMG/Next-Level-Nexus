import { Button } from '@material-ui/core'
import React from 'react'
import '../CSS/EachGame.css'

export const CreateReviewForm = () => {
    return (
        <div className="createReview">
            <h1 className="createReviewTitle">Write A Review</h1>
            <textarea id="reviewInputField" placeholder="Write Your Review" />
            <Button id="submitReview" variant="contained" color="primary" >Submit</Button>
        </div>
    )
}