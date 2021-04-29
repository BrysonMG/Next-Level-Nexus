import React, { useState, useEffect } from 'react'
import { MyCollectionCard } from './MyCollectionCard'
import { getCollection } from '../DataManagers/CollectionManager'
import { getGameById } from '../DataManagers/RawgManager'
import '../CSS/Collection.css'

export const MyCollection = () => {
    const [games, setGames] = useState([])
    const currentUserId = parseInt(sessionStorage.getItem("nexusUser"))

    const getGames = () => {
        getCollection().then(userGames => {
            const gamePromises = userGames
                .filter(userGame => userGame.userId === currentUserId)
                .map(userGame => getGameById(userGame.gameId));

            Promise.all(gamePromises).then(games => {
                console.log(games);
                setGames(games)
            })
        })
    }

    useEffect(() => {
        getGames()
    }, [])

    return (
        <div className="myStuffCollection">
            <h1 className="collectionHeader">My Collection</h1>
            <div className="collectionList">
                {games.map(game => {
                    if (game.background_image === null) {
                        game.background_image = 'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/3/3/2/7/237233-6-eng-GB/Cosmoprof-Asia-Ltd-SIC-Cosmetics-20132_news_large.jpg'
                    }
                    return <MyCollectionCard key={game.id} game={game} />
                })}
            </div>
        </div>
    )
}