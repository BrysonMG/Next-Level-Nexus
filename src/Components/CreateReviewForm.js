import { Button } from '@material-ui/core'
import React, {useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {editReview} from '../DataManagers/CollectionManager'
import '../CSS/EachGame.css'

export const CreateReviewForm = () => {
    const [review, setReview] = useState("")
    const currentUserId = parseInt(sessionStorage.getItem("nexusUser"))
    const {gameId} = useParams()
    const history = useHistory()
    
    const handleReview = event => {
        let text = event.target.value
        setReview(text)
    }

    let handleSubmit = event => {
        event.preventDefault()
        fetch(`http://localhost:8088/userGames?userId=${currentUserId}&gameId=${parseInt(gameId)}`)
        .then(res=>res.json())
        .then(thisReviewObj => {
            const extractObj = thisReviewObj[0]
            let submitObj = {
                userId: currentUserId,
                gameId: parseInt(gameId),
                gameTitle: extractObj.gameTitle,
                review: review,
                id: extractObj.id
            }
            editReview(submitObj).then(()=>{
                history.push(`/Games/${gameId}`)
            })
        })
    }

    return (
        <div className="createReview">
            <h1 className="createReviewTitle">Write A Review</h1>
            <textarea id="reviewInputField" onChange={handleReview} value={review} placeholder="Write Your Review" />
            <Button id="submitReview" onClick={handleSubmit} variant="contained" color="primary" >Submit</Button>
        </div>
    )
}