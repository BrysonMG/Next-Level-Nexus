import React from 'react'
import {IndivGameDetails} from '../Components/IndivGameDetails'
import { IndivGameReviewsList } from '../Components/IndivGameReviewsList'

export const IndividualGame = () => {
    return (
        <>
            <IndivGameDetails />
            <IndivGameReviewsList />
        </>
    )
}