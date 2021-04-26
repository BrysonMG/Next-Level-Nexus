import React from 'react'
import '../CSS/RecentAdd.css'

export const RecentAddCard = ({game}) => {

    return (
        <div className="newGameContainer">
            <img className="newGameImg" src={game.background_image} />
            <h3 className="newGameTitle">{game.name}</h3>
        </div>
    )
}