import React, { useState, useEffect } from 'react'
import { getGameLibrary } from '../DataManagers/RawgManager'
import { GamesListCard } from './GamesListCard'
import { SearchGames } from './SearchGames'
import '../CSS/GameLibrary.css'


export const GamesList = () => {
    const [games, setGames] = useState([])

    const getGames = () => {
        getGameLibrary().then(gamesArray => {
            setGames(gamesArray)
        })
    }

    useEffect(() => {
        getGames()
    }, [])

    return (
        <div className="gameLibrary">
            <SearchGames />
            <div className="libraryListContainer">
                {games.map(game => {
                    if (game.background_image === null) {
                        game.background_image = 'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/3/3/2/7/237233-6-eng-GB/Cosmoprof-Asia-Ltd-SIC-Cosmetics-20132_news_large.jpg'
                    }
                    return <GamesListCard key={game.id} game={game} />
                })}
                <h2 className="libraryNote">Use the search bar to find more games!</h2>
            </div>
        </div>
    )
}