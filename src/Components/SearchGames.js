import React, { useState } from 'react'
import '../CSS/GameLibrary.css'


export const SearchGames = ({getSearchedGames}) => {
    const [search, setSearch] = useState("")

    const handleInputChange = event => {
        let searchTerms = event.target.value
        setSearch(searchTerms)
    }

    const clearInputField = () => {
        setSearch("")
    }

    const handleSearch = () => {
        getSearchedGames(search)
        clearInputField()
    }

    const handleEnterPress = event => {
        if (event.keyCode === 13 && search !== "") {
            handleSearch()
        }
    }

    return (
        <input id="gameLibrarySearch" onKeyDown={handleEnterPress} onChange={handleInputChange} placeholder="Search" value={search} />
    )
}