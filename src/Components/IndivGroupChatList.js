import React, {useState, useEffect} from 'react'
import {getAllMessages} from '../DataManagers/GroupMessageManager'
import {IndivGroupChatCard} from './IndivGroupChatCard'
import {IndivGroupChatInput} from './IndivGroupChatInput'

export const IndivGroupChatList = () => {
    const [messages, setMessages] = useState([])
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"));
    
    const scrollToEnd = () => {
        const container = document.querySelector(".messagesContainer")
        container.scrollTop = container.scrollHeight
    }

    const getMessages = () => {
        getAllMessages().then(allMessages => {
            const senderMarked = allMessages.map(msg => ({...msg, sentBySelf: msg.userId === currentUserId}))
            return senderMarked
        }).then(markedMessages => {
            setMessages(allMessages)            
        }).then(()=>{
            scrollToEnd()
        })
    }

    useEffect(()=>{
        getMessages()
    },[])
                    //Line 35, MsgCard needs to be renamed, and the component needs to be made
    if (messages.length > 0) {
        return (
            <>
            <div className="messagesContainer">
                {messages.map(message => {
                    return <MsgCard key={message.id} message={message} /> 
                })}
            </div>
            <IndivGroupChatInput />
            </>
        )
    } else {
        return (
            <>
            <div className="messagesContainer">
            
            </div>
            <IndivGroupChatInput />
            </>
        )
    }
}