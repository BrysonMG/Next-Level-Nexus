const url = 'http://localhost:8088/groups'

export const getAllGroups = () => {
    return fetch(`${url}`)
    .then(res=>res.json())
}

export const getGroupMembers = () => {
    return fetch(`http://localhost:8088/groupMembers`)
    .then(res=>res.json())
}

export const addGroupMember = member => {
    return fetch(`http://localhost:8088/groupMembers`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(member)
    }).then(res=>res.json())
}

export const deleteGroupMember = id => {
    return fetch(`http://localhost:8088/groupMembers/${id}`, {
        method: "DELETE"
    }).then(res=>res.json())
}

export const getGroupById = id => {
    return fetch(`${url}/${id}`)
    .then(res=>res.json())
}

export const addGroup = groupObj => {
    return fetch(`${url}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(groupObj)
    }).then(res=>res.json())
}

export const deleteGroup = id => {
    return fetch(`${url}/${id}`, {
        method: "DELETE"
    }).then(res=>res.json())
}

export const editGroup = editedGroup => {
    return fetch(`${url}/${editedGroup.id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(editedGroup)
    }).then(res=>res.json())
}