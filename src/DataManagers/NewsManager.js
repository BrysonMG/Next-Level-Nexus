import { gamespotKey } from '../DataManagers/APIkeys.js'

const corsFix = 'https://polar-bayou-96358.herokuapp.com/' //without this, the fetch call get the error: No 'Access-Control-Allow-Origin' header...
const url = `http://www.gamespot.com/api/articles/?api_key=${gamespotKey}&format=json`

export const getArticles = () => {
    return fetch(`${corsFix}${url}&sort=publish_date:desc&limit=10`) //change the limit if more or less news articles are needed
        .then(res=>res.json())
        .then(res=>res.results)
}