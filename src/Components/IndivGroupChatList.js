import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getAllMessages } from '../DataManagers/GroupMessageManager'
import { IndivGroupChatCard } from './IndivGroupChatCard'
import { IndivGroupChatInput } from './IndivGroupChatInput'
import '../CSS/EachGroup.css'

export const IndivGroupChatList = () => {
    const [messages, setMessages] = useState([])
    const currentUserId = parseInt(sessionStorage.getItem("nexusUser"));
    const { groupId } = useParams()

    const scrollToEnd = () => {
        const container = document.querySelector(".messagesContainer")
        container.scrollTop = container.scrollHeight
    }

    const getMessages = () => {
        getAllMessages().then(allMessages => {
            const thisGroupsMessages = allMessages.filter(message => message.groupId === parseInt(groupId))
            const senderMarked = thisGroupsMessages.map(msg => ({ ...msg, sentBySelf: msg.userId === currentUserId }))
            return senderMarked
        }).then(markedMessages => {
            setMessages(markedMessages)
        })
    }

    useEffect(() => {
        getMessages()
    }, [])

    useEffect(() => {
        scrollToEnd()
    }, [messages])

    if (messages.length > 0) {
        return (
            <div className="groupChatBox">
                <div className="messagesContainer">
                    {messages.map(message => {
                        return <IndivGroupChatCard key={message.id} message={message} reload={getMessages} />
                    })}
                </div>
                <IndivGroupChatInput toggle={getMessages} />
            </div>
        )
    } else {
        return (
            <div className="groupChatBox">
                <div className="messagesContainer">

                </div>
                <IndivGroupChatInput toggle={getMessages} />
            </div>
        )
    }
}