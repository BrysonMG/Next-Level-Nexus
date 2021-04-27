import React, { useState, useEffect } from 'react'
import { getNewlyReleased } from '../DataManagers/RawgManager'
import { RecentAddCard } from './RecentAddCard'
import {Link} from 'react-router-dom'
import '../CSS/RecentAdd.css'

export const RecentlyAdded = () => {
    const [games, setGames] = useState([])

    const getGames = () => {
        getNewlyReleased().then(gamesArray => {
            setGames(gamesArray)
        })
    }

    useEffect(() => {
        getGames()
    }, [])

    return (
        <div className="recentAddContainer">
            <h1 className="recentAddHeader">New To The Nexus</h1>
            <div className="recentAddList">
                {games.map(game => {
                    if (game.background_image === null) {
                        game.background_image = 'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/3/3/2/7/237233-6-eng-GB/Cosmoprof-Asia-Ltd-SIC-Cosmetics-20132_news_large.jpg'
                    }
                    return <RecentAddCard key={game.id} game={game} />
                })}
            <h3 className="link2Library"><Link className="link2Library" to="/GameLibrary">See More...</Link></h3>
            </div>
        </div>
    )
}