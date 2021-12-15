import React from 'react'
import './Search.css'
import img from '../../Component/Images/robot.png'

const SearchBox = ({search, toggle}) => {
    return (
        <div className="search">
            
            <img src={img} alt="logo" />
           <input onChange = {search} className = "search-input" type="search" placeholder = 'search robots'/>
       
        </div>
    )
}

export default SearchBox
