import React from 'react'
import '../CSS/RecentAdd.css'
import {Link} from 'react-router-dom'

export const RecentAddCard = ({game}) => {

    return (
        <Link to={`/Games/${game.id}`}><div className="newGameContainer">
            <img className="newGameImg" src={game.background_image} alt="game" />
            <h3 className="newGameTitle">{game.name}</h3>
        </div></Link>
    )
}