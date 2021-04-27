import React from 'react'
import { News } from '../Components/News'
import { RecentlyAdded } from '../Components/RecentlyAdded'

export const Home = () => {
    return (
        <>
            <News />
            <RecentlyAdded />
        </>
    )
}