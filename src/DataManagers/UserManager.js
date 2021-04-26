const url = "http://localhost:8088"

export const addUser = (userObj) => {
    return fetch(`${url}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userObj)
    }).then(res=>res.json())
}

export const getAllUsers = () => {
    return fetch(`${url}/users`)
    .then(res=>res.json())
}