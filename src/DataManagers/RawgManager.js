import {RAWGkey} from './APIkeys.js'
//import {searchTerm} from ...wherever user types in search bar

const baseURL = `https://api.rawg.io/api/games?key=${RAWGkey}`

export const getNewlyReleased = () => {
    return fetch(`${baseURL}&page=1&page_size=20&ordering=-released&dates=2021-01-01,2021-05-15&exclude_additions=true`)
    .then(res=>res.json())
    .then(res=>res.results)
}

export const getGameLibrary = () => {
    return fetch(`${baseURL}`)
    .then(res=>res.json())
    .then(res=>res.results)
}

// export const getSearchResults = () => {
//     return fetch(`${baseURL}&search=${searchTerm}`)
//     .then(res=>res.json())
//     .then(res=>res.results)
// }