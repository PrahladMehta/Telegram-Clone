import React, { useContext,useState } from 'react'
import {Usercontext} from '../context/Usercontext'
import { NavLink,Route,Routes } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import All from './All/All'
import "./Chatsection.css" 
import Regular from './Regular/Regular';
import Unread from './Unread/Unread'; 
import Growstudy from './Growstudy/Growstudy'; 
import { RiPencilFill } from "react-icons/ri";
import Hamburgar from '../components/Hamburgar/Hamburgar';

const Chatsection = () => {
 
   const[hamburgar,setHamburgar]=useState(false);
  return (
    <div className='chat-section'> 
    <nav className=''> 
    <div className='upper-part'>
    <div className='hamburger-icon' onClick={()=>{setHamburgar(!hamburgar)}}>
      <GiHamburgerMenu  className='icon burger'/>   
       <Hamburgar setHamburgar={setHamburgar} hamburgar={hamburgar}></Hamburgar>
    </div> 
 
       <div className='search'>
       <IoSearchOutline  className='icon'/>
             <input type="text" placeholder='Search'/>
       </div>
    </div>
   

       <div className='navigation-bar'>
            <NavLink to="/" className="navlink">All</NavLink>
            <NavLink to="/regulare" className="navlink">Regulare</NavLink>
            <NavLink to="/unread" className="navlink">Unread</NavLink>
            <NavLink to="/grow-study" className="navlink">Grow Study</NavLink>

       </div>
    </nav>

       {/* ALL USER   CHATS  */}

       <div className='user-section'>

       <Routes>
          <Route path='' element={  <All></All>}></Route>
          <Route path='/regulare' element={<Regular></Regular>}></Route>
          <Route path='/unread' element={<Unread/>}></Route>
          <Route path='/grow-study' element=<Growstudy></Growstudy>></Route>
       </Routes>
       
    
       </div>


    
       <RiPencilFill  className='pencil' />

      


    </div>


  )
}

export default Chatsection