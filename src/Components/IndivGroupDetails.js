import React, { useState, useEffect } from 'react'
import { getGroupById, addGroupMember, getGroupMembers, deleteGroupMember, deleteGroup } from '../DataManagers/GroupManager'
import { useParams, Link, useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import '../CSS/EachGroup.css'

export const IndivGroupDetails = ({toggle}) => {
    const { groupId } = useParams()
    const history = useHistory()
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

    const getGroup = () => {
        getGroupById(groupId).then(theGroup => {
            setGroup(theGroup)
        })
    }

    const handleLeaveGroup = () => {
        getGroupMembers().then(allGroupsMembers => {
            const thisGroupsMembers = allGroupsMembers.filter(member => {
                return member.groupId === parseInt(groupId)
            })
            const currentUser = thisGroupsMembers.find(obj => obj.userId === currentUserId)
            
            deleteGroupMember(currentUser.id)
            .then(()=> {
                history.push("/")
            })
        })
    }

    const handleJoinGroup = () => {
        const newMemberObj = {
            userId: currentUserId,
            groupId: parseInt(groupId)
        }
        addGroupMember(newMemberObj).then(()=> {
            toggle()
            getGroup()
        })
    }

    const handleDeleteGroup = () => {
        deleteGroup(parseInt(groupId)).then(()=> {
            history.push("/")
        })
    }

    useEffect(() => {
        getGroup()
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
                setButton(<Button id="groupBtn1" onClick={handleLeaveGroup} variant="contained" color="primary">Leave Group</Button>)
                //if user is the owner
            } else if (group.userId === currentUserId) {
                setButton(<Button id="groupBtn2" onClick={handleDeleteGroup} variant="contained" color="primary">Delete Group</Button>)
                //if user is not a member
            } else {
                setButton(<Button id="groupBtn3" onClick={handleJoinGroup} variant="contained" color="primary">Join Group</Button>)
            }
        })
    }, [group])

    return (
        <div className="detailsContainer">
            <div className="groupLogoBox">
                <img className="groupLogo" src={group.logo} alt="group logo" />
                {currentUserId === group.userId ? <Link to={`/Groups/Edit/${parseInt(groupId)}`}><Button variant="contained" color="primary">Edit</Button></Link> : null}
            </div>
            <div className="groupInfoBox">
                <h1 className="groupName">{group.name}</h1>
                <h2 className="groupGame">{group.gameTitle}</h2>
                <p className="groupDesc">{group.description}</p>
                <div className="buttonBox">
                    {currentUserId === group.userId ? <Link to={`/Groups/Edit/${parseInt(groupId)}`}><Button variant="contained" color="primary">Edit</Button></Link> : null}
                    {button}
                </div>
            </div>
        </div>
    )
}