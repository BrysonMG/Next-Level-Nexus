import React, { useState, useEffect } from 'react'
import { editGroup, getGroupById } from '../DataManagers/GroupManager'
import { useParams, useHistory } from "react-router-dom"
import {Button} from '@material-ui/core'

//ICONS
const bomb = { id: 1, name: "Bomb", link: 'https://i.imgur.com/JQF4hVv.png' }
const chat = { id: 2, name: "Chat", link: 'https://i.imgur.com/8I1siUm.png' }
const cherry = { id: 3, name: "Cherry", link: 'https://i.imgur.com/5WqEo2p.png' }
const coin = { id: 4, name: "Coin", link: 'https://i.imgur.com/aFoNNSx.png' }
const drumstick = { id: 5, name: "Drumstick", link: 'https://i.imgur.com/63Bn6Pw.png' }
const heart = { id: 6, name: "Heart", link: 'https://i.imgur.com/j7M1vdm.png' }
const shield = { id: 7, name: "Shield", link: 'https://i.imgur.com/au2qWC2.png' }
const skull = { id: 8, name: "Skull", link: 'https://i.imgur.com/bqin0wH.png' }
const star = { id: 9, name: "Star", link: 'https://i.imgur.com/FZAZ3cT.png' }
const trophy = { id: 10, name: "Trophy", link: 'https://i.imgur.com/vYXr99Z.png' }

const icons = [bomb, chat, cherry, coin, drumstick, heart, shield, skull, star, trophy]

export const GroupEdit = () => {
    const [description, setDescription] = useState("")
    const [group, setGroup] = useState({
        id: 0,
        userId: 0,
        gameId: 0,
        gameTitle: "",
        name: "",
        description: "",
        logo: ""
    })
    const [logo, setLogo] = useState("")
    const { groupId } = useParams()
    const history = useHistory()

    const getGroup = () => {
        getGroupById(parseInt(groupId)).then(group => {
            setDescription(group.description)
            setGroup(group)
        })
    }

    const handleLogoChange = event => {
        let logoChoice = event.target.value
        setLogo(logoChoice)
    }

    const handleDescriptionInput = event => {
        let desc = event.target.value
        setDescription(desc)
    }

    const handleSubmit = event => {
        event.preventDefault()

        const copy = {...group}
        let groupObj = {
            id: copy.id,
            userId: copy.userId,
            gameId: copy.gameId,
            gameTitle: copy.gameTitle,
            name: copy.name,
            description: description,
            logo: logo
        }
        editGroup(groupObj).then(()=> {
            history.push(`/Groups/${parseInt(groupId)}`)
        })
    }

    const handleCancel = () => {
        history.push(`/Groups/${parseInt(groupId)}`)
    }

    useEffect(() => {
        getGroup()
    }, [])

    return (
        <div className="createGroupForm">
            <h1 className="createGroupHeader">Edit Group</h1>

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
                <Button id="submitEditGroup" onClick={handleSubmit} variant="contained" color="primary">Edit Group</Button>
                <Button id="cancelEditGroup" onClick={handleCancel} variant="contained" color="primary">Cancel</Button>
            </div>
        </div>
    )
}