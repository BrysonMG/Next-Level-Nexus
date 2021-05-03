import React, { useEffect, useState } from 'react'
import {deleteMessage} from '../DataManagers/GroupMessageManager'
import {getGroupById} from '../DataManagers/GroupManager'
import '../CSS/EachGroup.css'
import { useParams } from 'react-router'


export const IndivGroupChatCard = ({ message, reload }) => {
    const deleteTheMessage = event => {
        const targetId = parseInt(event.target.id.split('--')[1])
        deleteMessage(targetId).then(()=> {
            reload()
        })
    }
    const [isOwner, setIsOwner] = useState(false)
    const {groupId} = useParams()
    const currentUserId = parseInt(sessionStorage.getItem("nexusUser"))

    const checkIfOwner = () => {
        getGroupById(parseInt(groupId)).then(thisGroup => {
            if (thisGroup.userId === currentUserId) {
                setIsOwner(true)
            } else {
                setIsOwner(false)
            }
        })
    }

    useEffect(()=> {
        checkIfOwner()
    })

    if (message.sentBySelf) {
        return (
            <div className="deleteBoxSent">
                <div className="sentMsg">
                    <h4>
                        <span className="nameOfSender">{message.user?.username}: </span>
                        {`${message.message}`}
                    </h4>
                </div>
                {isOwner ? <button className="deleteGroupMessage" onClick={deleteTheMessage} id={`message--${message.id}`}>Delete</button> : null }
            </div>
        )
    } else {
        return (
            <div className="deleteBox" >
                <div className="receivedMsg">
                    <h4>
                        <span className="nameOfSender">{message.user?.username}: </span>
                        {`${message.message}`}
                    </h4>
                </div>
                {isOwner ? <button className="deleteGroupMessage" onClick={deleteTheMessage} id={`message--${message.id}`}>Delete</button> : null }
            </div>
        )
    }
}