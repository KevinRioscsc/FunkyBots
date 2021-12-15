import React from "react";
import './Card.css'


const Card = ({name,email,id, toggle,get, phone, website}) => {

    
    const click = () =>{
        console.log("card id: ", id)
        get(id, name, email, phone,website);
        toggle();
    }
    return(
        <div>
            
            <div className = "Card shadow-5" onClick = {click}>
                
                <img  id = {id} src={`https://robohash.org/test${id}?200x200`} alt="robot" />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
          
            
        </div>
    );
}

export default Card;