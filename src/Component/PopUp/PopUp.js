import React from 'react'
import './PopUp.css'
const PopUp = ({id, toggle, name,phone, website, email}) => {
    const handleClick = () =>{
        toggle();
    }
    return (
        <div className="modal">
            
            <div className="modal_content">
                <div className="close" onClick={handleClick}>X    </div>
                <p className = " Heading">{name}</p>
                <div className="flex">
                    <div className = "pic_border" >
                        <img className="profilePic" src={`https://robohash.org/test${id}?50x50`} alt="profile" />
                    </div>
                </div>
                <div className="info-content">
                    <p className = "Info">I'm Robot ID: {id}</p>
                    <p className = "Info">Number: {phone}</p>
                    <p className = "Info">Website: {website}</p>
                    <p className = "Info">Email: {email}</p>
                </div>
            </div>
        </div>
    )
}

export default PopUp
