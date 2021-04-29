import React, { useState, useEffect } from 'react'
import { getGameById } from '../DataManagers/RawgManager'
import '../CSS/MyGroups.css'

export const MyGroupsCard = ({group}) => {
    const [game, setGame] = useState({})

    const getGame = () => {
        getGameById(group.gameId).then(theGame => {
            setGame(theGame)
        })
    }

    useEffect(() => {
        getGame()
    },[])

    return (
        <div className="myGroupContainer">
            <h2 className="myGroupName">{group.name}</h2>
            <h3 className="myGroupGame">{game.name}</h3>
        </div>
    )
}