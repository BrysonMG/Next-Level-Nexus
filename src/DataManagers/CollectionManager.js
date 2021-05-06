const url = 'http://localhost:8088'

export const addToCollection = (obj) => {
    return fetch(`${url}/userGames`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(obj)
    }).then(res=>res.json())
}

export const getCollection = () => {
    return fetch(`${url}/userGames?_expand=user`)
        .then(res=>res.json())
}

export const removeFromCollection = (id) =>{
    return fetch(`${url}/userGames/${id}`, {
        method: "DELETE"
    }).then(res=>res.json())
}

export const editReview = editedObj => {
    return fetch(`${url}/usergames/${editedObj.id}`, {
        method:"PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(editedObj)
    }).then(res=>res.json())
}