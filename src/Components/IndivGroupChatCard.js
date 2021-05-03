import React from 'react'
import '../CSS/EachGroup.css'


export const IndivGroupChatCard = ({message}) => {
    if (message.sentBySelf) {
        return (
            <div className="sentMsg">
                <h4>
                    <span className="nameOfSender">{message.user?.username}: </span>
                    {`${message.message}`}
                </h4>
            </div>
        )
    } else {
        return (
            <div className="receivedMsg">
                <h4>
                    <span className="nameOfSender">{message.user?.username}: </span>
                    {`${message.message}`}
                </h4>
            </div>
        )
    }
}