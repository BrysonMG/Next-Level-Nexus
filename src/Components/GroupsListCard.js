import React, {useState, useEffect} from 'react'
import {getGameById} from '../DataManagers/RawgManager'
import '../CSS/GroupsPage.css'

export const GroupsListCard = ({group}) => {
    const [game, setGame] = useState({name: ""})

    const getGame = () => {
        getGameById(group.gameId).then(theGame => {
            setGame(theGame)
        })
    }

    useEffect(()=> {
        getGame()
    },[])

    return (
        <div className="groupsListCard">
            <img className="groupsListImg" src={group.logo} alt="group logo" />
            <h2 className="groupsListName">{group.name}</h2>
            <h3 className="groupsListGame">{game.name}</h3>
        </div>
    )
}