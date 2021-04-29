import React, { useState, useEffect } from 'react'
import { MyGroupsCard } from './MyGroupsCard'
import { getAllGroups, getGroupMembers } from '../DataManagers/GroupManager'
import '../CSS/MyGroups.css'

export const MyGroups = () => {
    const [groups, setGroups] = useState([])
    const currentUserId = parseInt(sessionStorage.getItem("nexusUser"))

    const getUsersGroups = () => {
        getGroupMembers().then(groupsMembers=> {
            getAllGroups().then(allGroups => {
                const groupsUserIsIn = groupsMembers
                    .filter(groupMember => groupMember.userId === currentUserId)
                let usersGroups = []
                for (const eachGroup of allGroups) {
                    for (const eachMember of groupsUserIsIn) {
                        if (eachMember.groupId === eachGroup.id) {
                            usersGroups.push(eachGroup)
                        }
                    }
                }
                setGroups(usersGroups)
            })
        })
    }

    useEffect(()=> {
        getUsersGroups()
    },[])

    return (
        <div className="myGroupsContainer">
            <h1 className="myGroupsHeader">My Groups</h1>
            <div className="myGroupsList">
                {groups.map(group => {
                    return <MyGroupsCard key={group.id} group={group} />
                })}
            </div>
        </div>
    )
}