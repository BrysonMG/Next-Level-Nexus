import React from 'react'
import '../CSS/GameLibrary.css'
import {Link} from 'react-router-dom'

export const GamesListCard = ({game}) => {
    return (
        <Link to={`/Games/${game.id}`}><div className="mainGameContainer">
            <img className="mainGameImg" src={game.background_image} alt="game" />
            <h3 className="mainGameTitle">{game.name}</h3>
        </div></Link>
    )
}