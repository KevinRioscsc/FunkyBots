import React from 'react'
import './Add.css'

const Add = () => {
    return (
        <div className='Search_bar'>
            <div className="close close2" >X    </div>
            <nav className=" search2 dt w-100 border-box pa3 ph5-ns">
                <a
                className="dtc v-mid mid-gray link dim w-25"
                href="#"
                title="Home"
                >
                <img
                src="http://tachyons.io/img/logo.jpg"
                className="dib w2 h2 br-100"
                alt="Site Name"
                />
                </a>
                <div className="dtc v-mid w-75 tr">
                <input
                className="search-input link dim dark-gray f6 f5-ns dib mr3 mr4-ns"
                type="search" placeholder = 'search friends'
                />
                
                <button
                className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns"
                href="#"
                title="Store"
                >
                Search
                </button>
                
                </div>
                </nav>
            
        </div>
    )
}

export default Add
