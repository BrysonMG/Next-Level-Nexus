import React, {useState, useEffect} from 'react'
import {getGameById} from '../DataManagers/RawgManager'


export const IndivGameDetails = ({gameId}) => {
    const [game, setGame] = useState({})
    return (
        <div className="detailsContainer">
            <div className="titleImgBox">
                <h1 className="gameTitle">{game.name}</h1>
                <img className="gameImg" alt="game" src={game.background_image} />
            </div>
            <div className="descriptionBox">
                <span className="descriptionTitle">Description: </span>{game.description}
                <span className="descriptionTitle">Release Date: </span><p>{game.released}</p>
                <span className="descriptionTitle">Est. Hours To Complete: </span><p>{game.playtime}</p>
            </div>
        </div>
    )
}