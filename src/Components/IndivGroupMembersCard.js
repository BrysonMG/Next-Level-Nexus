import React, {useState, useEffect} from 'react'
import {getUserById} from '../DataManagers/UserManager'
import '../CSS/EachGroup.css'

export const IndivGroupMembersCard = ({member}) => {
    const [user, setUser] = useState({})

    const getUser = () => {
        getUserById(member.userId).then(theUser => {
            setUser(theUser)
        })
    }

    useEffect(()=>{
        getUser()
    },[])

    return (
        <div className="memberCard">
            <h3 className="memberName">{user.username}</h3>
        </div>
    )
}