import React from 'react'
import { MyCollection } from '../Components/MyCollection'
import { MyGroups } from '../Components/MyGroups'
import { MyReviews } from '../Components/MyReviews'

export const MyStuff = () => {
    return (
        <>
            <MyCollection />
            <MyGroups />
            <MyReviews />
        </>
    )
}