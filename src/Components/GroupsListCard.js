import React from 'react'
import '../CSS/GroupsPage.css'

export const GroupsListCard = ({group}) => {

    return (
        <div className="groupsListCard">
            <img className="groupsListImg" src={group.logo} alt="group logo" />
            <h2 className="groupsListName">{group.name}</h2>
            <h3 className="groupsListGame">{group.gameTitle}</h3>
        </div>
    )
}