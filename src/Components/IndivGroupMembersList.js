import React, { useState, useEffect } from 'react'
import { getGroupMembers } from '../DataManagers/GroupManager'
import { IndivGroupMembersCard } from './IndivGroupMembersCard'
import { useParams } from 'react-router-dom'
import '../CSS/EachGroup.css'

export const IndivGroupMembersList = ({ toggle }) => {
    const [groupMembers, setGroupMembers] = useState([])
    const [rerender, setRerender] = useState(true)
    const { groupId } = useParams()

    const getThisGroupsMembers = () => {
        getGroupMembers().then(allGroupsMembers => {
            const thisGroupsMembers = allGroupsMembers.filter(member => {
                return member.groupId === parseInt(groupId)
            })
            setGroupMembers(thisGroupsMembers)
        })
    }

    useEffect(() => {
        getThisGroupsMembers()
    }, [])

    useEffect(() => {
        getThisGroupsMembers()
    }, [toggle])

    return (
        <>
            <h1 className="memberHeader">Members</h1>
            <div className="memberList">
                {groupMembers.map(member => {
                    return <IndivGroupMembersCard key={member.id} member={member} />
                })}
            </div>
        </>
    )
}
