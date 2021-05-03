import React, {useState, useEffect} from 'react'
import {getUserById} from '../DataManagers/UserManager'
import {getGroupById, deleteGroupMember} from '../DataManagers/GroupManager'
import '../CSS/EachGroup.css'
import { useParams } from 'react-router'

export const IndivGroupMembersCard = ({member, reload}) => {
    const [user, setUser] = useState({})
    const [isOwner, setIsOwner] = useState(false)
    const currentUserId = parseInt(sessionStorage.getItem("nexusUser"))
    const {groupId} = useParams()

    const checkIfOwner = () => {
        getGroupById(parseInt(groupId)).then(thisGroup => {
            if (thisGroup.userId === currentUserId) {
                setIsOwner(true)
            } else {
                setIsOwner(false)
            }
        })
    }

    const getUser = () => {
        getUserById(member.userId).then(theUser => {
            setUser(theUser)
        })
    }

    const handleRemoveMember = event => {
        const targetId = parseInt(event.target.id.split("--")[1])
        deleteGroupMember(targetId).then(()=>{
            reload()
        })
    }

    useEffect(()=>{
        getUser()
        checkIfOwner()
    },[])

    return (
        <div className="memberCard">
            <h3 className="memberName">{user.username}</h3>
            {(isOwner && user.id !== currentUserId) ? <button id={`remove--${member.id}`} onClick={handleRemoveMember} className="deleteMemberButton">Remove</button> : null}
        </div>
    )
}