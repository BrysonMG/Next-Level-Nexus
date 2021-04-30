import React, { useState, useEffect } from 'react'
import { getGroupById, getGroupMembers } from '../DataManagers/GroupManager'
import { useParams } from 'react-router-dom'
import { Button } from '@material-ui/core'
import '../CSS/EachGroup.css'

export const IndivGroupDetails = () => {
    const { groupId } = useParams()
    const [button, setButton] = useState("")
    const [group, setGroup] = useState({
        userId: 0,
        gameId: 0,
        gameTitle: "",
        name: "",
        description: "",
        logo: ""
    })
    const currentUserId = parseInt(sessionStorage.getItem("nexusUser"))

    // const [groupMembers, setGroupMembers] = useState([])
    //This will be used in members list
    // const getThisGroupsMembers = () => {
    //     getGroupMembers().then(allGroupsMembers => {
    //         const thisGroupsMembers = allGroupsMembers.filter(member=> {
    //             return member.groupId === groupId
    //         })
    //         setGroupMembers(thisGroupsMembers)
    //     })
    // }

    const getUserType = () => {
        getGroupById(groupId).then(theGroup => {
            setGroup(theGroup)
        })
    }

    useEffect(() => {
        getUserType()
    }, [])

    useEffect(() => {
        getGroupMembers().then(allGroupsMembers => {
            const thisGroupsMembers = allGroupsMembers.filter(member => {
                return member.groupId === parseInt(groupId)
            })
            //if user is a member, but not the owner
            if (thisGroupsMembers.some(eachObj => {
                return eachObj.userId === currentUserId
            }) && group.userId !== currentUserId) {
                setButton(<Button id="groupBtn1" variant="contained" color="primary">Leave Group</Button>)
                //if user is the owner
            } else if (group.userId === currentUserId) {
                setButton(<Button id="groupBtn2" variant="contained" color="primary">Delete Group</Button>)
                //if user is not a member
            } else {
                setButton(<Button id="groupBtn3" variant="contained" color="primary">Join Group</Button>)
            }
        })
    }, [group])

    return (
        <div className="detailsContainer">
            <div className="groupLogoBox">
                <img className="groupLogo" src={group.logo} alt="group logo" />
                {currentUserId === group.userId ? <Button variant="contained" color="primary">Edit</Button> : null}
            </div>
            <div className="groupInfoBox">
                <h1 className="groupName">{group.name}</h1>
                <h2 className="groupGame">{group.gameTitle}</h2>
                <p className="groupDesc">{group.description}</p>
                <div className="buttonBox">
                    {currentUserId === group.userId ? <Button variant="contained" color="primary">Edit</Button> : null}
                    {button}
                </div>
            </div>
        </div>
    )
}