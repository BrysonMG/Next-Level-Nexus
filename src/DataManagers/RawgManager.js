import {RAWGkey} from './APIkeys.js'

const baseURL = `https://api.rawg.io/api/games?key=${RAWGkey}`

export const getNewlyReleased = () => {
    return fetch(`${baseURL}&page=1&page_size=20&ordering=-released&dates=2021-01-01,2021-05-15&exclude_additions=true`)
    .then(res=>res.json())
    .then(res=>res.results)
}

export const getGameLibrary = () => {
    return fetch(`${baseURL}&page=1&page_size=40`)
    .then(res=>res.json())
    .then(res=>res.results)
}

export const getSearchResults = (search) => {
    return fetch(`${baseURL}&search=${search}&page=1&page_size=40`)
    .then(res=>res.json())
    .then(res=>res.results)
}