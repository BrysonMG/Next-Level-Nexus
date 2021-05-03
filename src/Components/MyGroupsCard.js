import React from 'react'
import {Link} from 'react-router-dom'
import '../CSS/MyGroups.css'

export const MyGroupsCard = ({group}) => {
    
    return (
        <Link to={`/Groups/${group.id}`}><div className="myGroupContainer">
            <img className="myGroupImg" src={group.logo} alt="group logo" />
            <h2 className="myGroupName">{group.name}</h2>
            <h3 className="myGroupGame">{group.gameTitle}</h3>
        </div></Link>
    )
}