import React, {useState} from 'react'
import {IndivGameDetails} from '../Components/IndivGameDetails'
import { IndivGameReviewsList } from '../Components/IndivGameReviewsList'

export const IndividualGame = () => {
    const [render, setRender] = useState(false)

    const toggleRender = () => {
        if (render) {
            setRender(false)
        } else {
            setRender(true)
        }
    }

    return (
        <>
            <IndivGameDetails toggle={toggleRender} />
            <IndivGameReviewsList render={render} />
        </>
    )
}