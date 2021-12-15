import React from 'react'
import './Scroll.css'

const Scroll = (props) => {
    return (
        <div id='style-2' style={{overflowY:'scroll', border: '5px solid black', height:'692px'}}>
            {props.children}
        </div>
    )
}

export default Scroll
