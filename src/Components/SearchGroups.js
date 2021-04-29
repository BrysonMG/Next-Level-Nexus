import React, {useState} from 'react'
import '../CSS/GroupsPage.css'

export const SearchGroups = ({getSearchedGroups}) => {
    const [search, setSearch] = useState("")

    const handleInputChange = event => {
        let searchTerms = event.target.value
        setSearch(searchTerms)
    }

    const clearInputField = () => {
        setSearch("")
    }

    const handleSearch = () => {
        getSearchedGroups(search)
        clearInputField()
    }

    const handleEnterPress = event => {
        if (event.keyCode === 13 && search !== "") {
            handleSearch()
        }
    }

    return (
        <input id="groupSearch" onKeyDown={handleEnterPress} onChange={handleInputChange} placeholder="Search" value={search} />
    )
}