import React, { useState, useEffect } from 'react'
import { addGroup, addGroupMember, getAllGroups } from '../DataManagers/GroupManager'
import { getCollection } from '../DataManagers/CollectionManager'
import { Button } from '@material-ui/core'
import '../CSS/CreateGroup.css'
import { useHistory } from 'react-router'

//ICONS
const bomb = { id: 1,name: "Bomb", link: 'https://i.imgur.com/JQF4hVv.png' }
const chat = { id: 2,name: "Chat", link: 'https://i.imgur.com/8I1siUm.png' }
const cherry = { id: 3,name: "Cherry", link: 'https://i.imgur.com/5WqEo2p.png' }
const coin = { id: 4,name: "Coin", link: 'https://i.imgur.com/aFoNNSx.png' }
const drumstick = { id: 5,name: "Drumstick", link: 'https://i.imgur.com/63Bn6Pw.png' }
const heart = { id: 6,name: "Heart", link: 'https://i.imgur.com/j7M1vdm.png' }
const shield = { id: 7,name: "Shield", link: 'https://i.imgur.com/au2qWC2.png' }
const skull = { id: 8,name: "Skull", link: 'https://i.imgur.com/bqin0wH.png' }
const star = { id: 9,name: "Star", link: 'https://i.imgur.com/FZAZ3cT.png' }
const trophy = { id: 10,name: "Trophy", link: 'https://i.imgur.com/vYXr99Z.png' }

const icons = [bomb, chat, cherry, coin, drumstick, heart, shield, skull, star, trophy]

export const CreateGroupForm = () => {
    const [collection, setCollection] = useState([])
    const [nameInput, setNameInput] = useState("")
    const [logo, setLogo] = useState("")
    const [game, setGame] = useState({ gameId: 0, gameTitle: "" })
    const [description, setDescription] = useState("")

    const currentUserId = parseInt(sessionStorage.getItem("nexusUser"))

    const history = useHistory()

    const getUserCollection = () => {
        getCollection().then(allCollections => {
            const currentUserCollection = allCollections.filter(collection => {
                return collection.userId === currentUserId
            })
            setCollection(currentUserCollection)
        })
    }

    const handleLogoChange = event => {
        let logoChoice = event.target.value
        setLogo(logoChoice)
    }

    const handleNameInput = event => {
        let groupName = event.target.value
        setNameInput(groupName)
    }

    const handleDescriptionInput = event => {
        let desc = event.target.value
        setDescription(desc)
    }

    const handleGameChange = event => {
        let game = event.target.value
        let gameArray = game.split("--")

        let gameId = parseInt(gameArray[1])
        let gameTitle = gameArray[0]
        
        const gameObj = {
            gameId: gameId,
            gameTitle: gameTitle
        }
        setGame(gameObj)
    }

    const handleSubmit = event => {
        event.preventDefault()

        let groupObj = {
            userId: currentUserId,
            gameId: game.gameId,
            gameTitle: game.gameTitle,
            name: nameInput,
            description: description,
            logo: logo
        }

        addGroup(groupObj).then(() => {
            getAllGroups().then(allGroups => {
                const newGroup = allGroups.find(group => {
                    return (group.name === groupObj.name && group.description === groupObj.description)
                })
                let memberObj = {
                    userId: currentUserId,
                    groupId: newGroup.id
                }
                addGroupMember(memberObj).then(()=> {
                    history.push("/Groups")
                })
            })
        })
    }

    const handleCancel = () => [
        history.push("/Groups")
    ]

    useEffect(() => {
        getUserCollection()
    }, [])

    return (
        <div className="createGroupForm">
            <h1 className="createGroupHeader">Create Group</h1>

            <label htmlFor="groupNameInput">Group Name</label>
            <input id="groupNameInput" onChange={handleNameInput} value={nameInput} />

            <label htmlFor="gameDropdown">Game Title</label>
            <select id="gameDropdown" onChange={handleGameChange} name="gameDropdown">
                <option selected hidden disabled>Please Select A Game</option>
                {collection.map(game => {
                    return <option key={game.gameId} value={[game.gameTitle+"--"+game.gameId]}>{game.gameTitle}</option>
                })}
            </select>

            <label htmlFor="logoDropdown">Logo</label>
            <select id="logoDropdown" onChange={handleLogoChange} name="logoDropdown">
                <option selected hidden disabled>Please Select A Logo</option>
                {icons.map(icon => {
                    return <option key={icon.id} value={icon.link}>{icon.name}</option>
                })}
            </select>

            <label htmlFor="descInput">Description</label>
            <textarea id="descInput" value={description} onChange={handleDescriptionInput} />

            <div className="buttonBox">
                <Button id="submitNewGroup" onClick={handleSubmit} variant="contained" color="primary">Create Group</Button>
                <Button id="cancelCreateGroup" onClick={handleCancel} variant="contained" color="primary">Cancel</Button>
            </div>
        </div>
    )
}