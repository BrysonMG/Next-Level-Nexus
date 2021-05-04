import React from 'react'
import "../CSS/Collection.css"
import {Link} from 'react-router-dom'

export const MyCollectionCard = ({game}) => {
    return (
        <Link to={`/Games/${game.id}`}><div className="collectionGameContainer">
            <img className="collectionGameImg" src={game.background_image} alt="game" />
            <h3 className="collectionGameTitle">{game.name}</h3>
        </div></Link>
    )
}