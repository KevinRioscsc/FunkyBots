import React from 'react'
import Card from '../Card/Card'

const CardList = ({robots, toggle, set}) => {
   
   
    const cardComponent = robots.map((user, i) => {
        return <Card get = {set} toggle = {toggle} key = {i} id ={robots[i].id} name = {robots[i].name} website = {robots[i].website} phone = {robots[i].phone} email = {robots[i].email}/>
    } )
    
    return (
        <div className = " bg-white list  w-20 flex flex-wrap justify-center ">
            {cardComponent}
        </div>
    )
}

export default CardList
