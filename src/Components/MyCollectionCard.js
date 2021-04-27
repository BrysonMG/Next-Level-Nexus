import React from 'react'

export const MyCollectionCard = ({game}) => {
    return (
        <div className="collectionGameContainer">
            <img className="collectionGameImg" src={game.background_image} alt="game" />
            <h3 className="collectionGameTitle">{game.name}</h3>
        </div>
    )
}