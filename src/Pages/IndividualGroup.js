import React from 'react'
import { GroupChatBox } from '../Components/GroupChatBox'
import {IndivGroupDetails} from '../Components/IndivGroupDetails'
import {IndivGroupMembersList} from '../Components/IndivGroupMembersList'

export const IndividualGroup =()=> {
    return (
        <>
            <IndivGroupDetails />
            <IndivGroupMembersList />
            <GroupChatBox />
        </>
    )
}