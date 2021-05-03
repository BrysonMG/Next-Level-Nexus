import React, { useState } from 'react'
import { GroupChatBox } from '../Components/GroupChatBox'
import {IndivGroupDetails} from '../Components/IndivGroupDetails'
import {IndivGroupMembersList} from '../Components/IndivGroupMembersList'

export const IndividualGroup =()=> {
    const [toggle, setToggle] = useState(true)

    const toggleFunction = () => {
        if (toggle) {
            setToggle(false)
        } else {
            setToggle(true)
        }
    }

    return (
        <>
            <IndivGroupDetails toggle={toggleFunction} />
            <IndivGroupMembersList toggle={toggle} />
            <GroupChatBox />
        </>
    )
}