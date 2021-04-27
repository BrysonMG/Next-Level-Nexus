import React from 'react'
import '../CSS/GameLibrary.css'

export const GamesListCard = ({game}) => {
    return (
        <div className="mainGameContainer">
            <img className="mainGameImg" src={game.background_image} alt="game" />
            <h3 className="mainGameTitle">{game.name}</h3>
        </div>
    )
}