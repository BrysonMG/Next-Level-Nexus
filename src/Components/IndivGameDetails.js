import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import { getGameById } from '../DataManagers/RawgManager'
import { getCollection, addToCollection, removeFromCollection } from '../DataManagers/CollectionManager'
import { useParams } from 'react-router-dom'
import '../CSS/EachGame.css'

export const IndivGameDetails = () => {
    const { gameId } = useParams()
    const [inCollection, setInCollection] = useState(false)
    const [button, setButton] = useState(null)

    const currentUserId = parseInt(sessionStorage.getItem("nexusUser"))
    const [game, setGame] = useState({
        name: "",
        background_image: "",
        description: "",
        released: "",
        playtime: 0
    })

    const getGame = () => {
        getGameById(gameId).then(theGame => {
            setGame(theGame)
        })
    }

    const checkInCollection = () => {
        getCollection().then(allCollections => {
            if (allCollections.find(coll => (coll.userId === currentUserId && coll.gameId === parseInt(gameId)))) {
                setInCollection(true)
            } else if (inCollection) {
                setInCollection(false)
            }
        })
    }

    const handleAddCollection = () => {
        getGameById(gameId).then(thisGame=> {
            const collObj = {
                userId: currentUserId,
                gameId: parseInt(gameId),
                gameTitle: thisGame.name,
                review: ""
            }
            addToCollection(collObj).then(()=>{
                checkInCollection()
            })
        })
    }

    const handleRemoveCollection = () => {
        getCollection().then(allCollections=>{
            const target = allCollections.find(coll=> {
                return (coll.userId === currentUserId && coll.gameId === parseInt(gameId))
            })

            removeFromCollection(target.id).then(()=>{
                checkInCollection()
            })
        })
    }

    let fixedDesc = game.description.replaceAll("<p>", "").replaceAll("<br />", "").replaceAll("</p>", "")
    
    useEffect(() => {
        getGame()
        checkInCollection()
    },[])

    useEffect(()=>{
        if (inCollection) {
            setButton(<Button id="removeCollection" onClick={handleRemoveCollection} variant="contained" color="primary">Remove From Collection</Button>)
        } else {
            setButton(<Button id="addCollection" onClick={handleAddCollection} variant="contained" color="primary">Add To Collection</Button>)
        }
    },[inCollection])

    
    return (
        <div className="contentAndButton">
            <h1 className="gameTitle">{game.name}</h1>
            <div className="gameDetailsContainer">
                <div className="titleImgBox">
                    <img className="gameImg" alt="game" src={game.background_image} />
                </div>
                <div className="descriptionBox">
                    <span className="descriptionTitle">Description: </span><p>{fixedDesc}</p>
                    <span className="descriptionTitle">Release Date: </span><p>{game.released}</p>
                    <span className="descriptionTitle">Est. Hours To Complete: </span><p>{game.playtime}</p>
                </div>
            </div>
            {button}
        </div>
    )
}