import React, { useState } from 'react'
import { addMessage } from '../DataManagers/GroupMessageManager'
import { useParams } from 'react-router-dom'

export const IndivGroupChatInput = () => {
    const [messageObj, setMessageObj] = useState({
        userId: 0,
        groupId: 0,
        message: ""
    })

    const { groupId } = useParams()
    const currentUserId = parseInt(sessionStorage.getItem("nexusUser"))

    const handleMessageChange = (event) => {
        const newMessageObj = { ...messageObj }
        let message = event.target.value;

        newMessageObj.message = message
        setMessageObj(newMessageObj)
    }

    const handleClickSend = (event) => {
        event.preventDefault()
        if (messageObj.message === "") {
            alert("Please type a message you wish to send.")
        } else {
            let obj = {...messageObj}
            obj.userId = currentUserId
            obj.groupId = groupId
            
            addMessage(obj)
        }
    }
    
    return (
        <div className="inputContainer">
            <textarea id="groupMessageInputField" value={messageObj.message} placeholder="Type Your Message" onChange={handleMessageChange} />
            <button id="sendButton" onClick={handleClickSend} >Send</button>
        </div>
    )
}

