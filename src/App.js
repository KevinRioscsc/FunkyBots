import React, {useState, useEffect} from 'react'
import CardList from './Component/CardLIst/CardList'
import SearchBox from './Component/SearchBox/SearchBox'
import Scroll from "./Scroll"
import PopUp from './Component/PopUp/PopUp'

import Footer from './Component/Footer/Footer'


import './App.css';

const App = () => {
    const [robotID, setID] = useState();
    const [robotName, setName] = useState();
    const [robotEmail, setEmail] = useState();
    const [robotPhone, setPhone] = useState();
    const [robotWebsite, setWebsite] = useState();
    const [search, setSearch] = useState('');
    const [robots, setRobots] = useState([]);
    const [seen, setSeen] = useState(false);
    const [toggle, setToggle] = useState(false);

    const getRobot_ID = (ID, Name, Email, Phone, Website) =>{
        setID(ID);
        setName(Name);
        setEmail(Email);
        setPhone(Phone);
        setWebsite(Website);
        console.log("StateID", ID);
    }
    
    const wasSeen = () => {
        setSeen(!seen);
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    })

    const findSearch = (event) =>{
       setSearch(event.target.value);
    }
    
    const toggle2 = () => {
        setToggle(!toggle);
        
    }
    const filtered = robots.filter((robots) => {
        return robots.name.toLowerCase().includes(search.toLowerCase());
    });
    
    return (
       
        <div className = "main">

           <SearchBox toggle = {toggle2} search = {findSearch}/>
            {seen ? <PopUp name = { robotName} email = {robotEmail} phone = {robotPhone} website = {robotWebsite} id = {robotID} toggle = {wasSeen}/> : null}
            <Scroll>
                <h1 className='tc bg-white ma0 black-90 pa2'>Funky Bots</h1>
                <CardList set = {getRobot_ID} toggle = {wasSeen} robots = {filtered}/>
            </Scroll>
            <Footer/>
        </div>
    )
}

export default App
