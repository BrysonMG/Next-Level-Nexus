const url = 'http://localhost:8088/groupMessages'

export const getAllMessages = () => {
    return fetch(`${url}?_expand=user`)
    .then(res=>res.json())
}

export const addMessage = message => {
    return fetch(`${url}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(message)
    }).then(res=>res.json())
}

export const deleteMessage = id => {
    return fetch(`${url}/${id}`, {
        method: "DELETE"
    }).then(res=>res.json())
}

export const editMessage = editedMessage => {
    return fetch(`${url}/${editedMessage.id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(editedMessage)
    }).then(res=>res.json())
}