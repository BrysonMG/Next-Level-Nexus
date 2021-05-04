import {RAWGkey} from './APIkeys.js'

const corsFix = 'https://polar-bayou-96358.herokuapp.com/'
const baseURL = `https://api.rawg.io/api/games?key=${RAWGkey}`


export const getNewlyReleased = () => {
    return fetch(`${corsFix}${baseURL}&page=1&page_size=20&ordering=-released&dates=2021-01-01,2021-05-15&exclude_additions=true`)
    .then(res=>res.json())
    .then(res=>res.results)
}

export const getGameLibrary = () => {
    return fetch(`${corsFix}${baseURL}&page=1&page_size=40`)
    .then(res=>res.json())
    .then(res=>res.results)
}

export const getSearchResults = (search) => {
    return fetch(`${corsFix}${baseURL}&search=${search}&page=1&page_size=40`)
    .then(res=>res.json())
    .then(res=>res.results)
}

export const getGameById = (id) => {
    return fetch(`${corsFix}https://api.rawg.io/api/games/${id}?key=${RAWGkey}`)
    .then(res=>res.json())


}