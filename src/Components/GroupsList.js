import React, { useState, useEffect } from 'react'
import { GroupsListCard } from './GroupsListCard'
import { getAllGroups } from '../DataManagers/GroupManager'
import { Button } from '@material-ui/core'
import { SearchGroups } from './SearchGroups'
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import '../CSS/GroupsPage.css'

export const GroupsList = () => {
    const [groups, setGroups] = useState([])

    const getGroups = () => {
        getAllGroups().then(allGroups => {
            setGroups(allGroups)
        })
    }

    const getSearchedGroups = search => {
        getAllGroups().then(allGroups => {
            const searchMatches = allGroups.filter(group => {
                return (group.name.toLowerCase().includes(search.toLowerCase()) || group.gameTitle.toLowerCase().includes(search.toLowerCase()))
            })
            setGroups(searchMatches)
        })
    }

    useEffect(() => {
        getGroups()
    }, [])

    return (
        <div className="groupsPage">
            <div className="groupsHeader">
                <h1 className="groupsTitle">Join Groups</h1>
                <div className="rightAlign">
                    <Button id="newGroupButton" variant="contained" color="primary"><GroupAddIcon style={{ marginRight: 5 }} /> Create New Group</Button>
                    <Button id="seeAllGroups" onClick={getGroups} variant="contained" color="primary">See All Groups</Button>
                    <SearchGroups getSearchedGroups={getSearchedGroups} />
                </div>
            </div>
            <div className="groupsList">
                {groups.map(group => {
                    return <GroupsListCard key={group.id} group={group} />
                })}
            </div>
        </div>
    )
}