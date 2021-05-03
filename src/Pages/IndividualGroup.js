import React, { useEffect, useState } from 'react'
import { GroupChatBox } from '../Components/GroupChatBox'
import {IndivGroupDetails} from '../Components/IndivGroupDetails'
import {IndivGroupMembersList} from '../Components/IndivGroupMembersList'
import {useParams} from 'react-router-dom'

export const IndividualGroup =()=> {
    const [toggle, setToggle] = useState(true)
    const [member, setMember] = useState(false)

    const toggleFunction = () => {
        if (toggle) {
            setToggle(false)
        } else {
            setToggle(true)
        }
    }

    const currentUserId = parseInt(sessionStorage.getItem("nexusUser"))
    const {groupId} = useParams()

    const checkIfUserIsMember = () => {
        fetch(`http://localhost:8088/groupMembers?userId=${currentUserId}&groupId=${groupId}`)
        .then(res=>res.json())
        .then(memberCheck => {
            if (memberCheck.length > 0) {
                setMember(true)
            } else {
                setMember(false)
            }
        })
    }

    useEffect(()=> {
        checkIfUserIsMember()
    })

    return (
        <>
            <IndivGroupDetails toggle={toggleFunction} />
            <IndivGroupMembersList toggle={toggle} />
            {member ? <GroupChatBox /> : null}
        </>
    )
}