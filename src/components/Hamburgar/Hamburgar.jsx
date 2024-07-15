import React from 'react'
import "./Hamburgar.css"
import { FaRegBookmark } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { HiPlayCircle } from "react-icons/hi2";
import { RiSettings5Line } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaBug } from "react-icons/fa6";
import { TbVersions } from "react-icons/tb";
import { MdAddCircleOutline } from "react-icons/md";
const Hamburgar = ({setHamburgar,hamburgar}) => {
  return (
    <div className={`hamburgar-page ${hamburgar&&"hamburgar-active"}`} onClick={()=>setHamburgar(false)}>

        <div className='hamburgar-menu'>

                <div><FaRegBookmark />  <p>Saved Messaage</p></div>
                <div><IoIosContact />  <p>Contacts</p></div>
                <div><HiPlayCircle />  <p>My Stories</p></div>
                <div><RiSettings5Line /> <p>Setting</p></div>          
                <div><FaRegQuestionCircle />  <p>Telegram Features</p></div>
                <div><FaBug /> <p>Report a Bug</p></div>
                <div><TbVersions /> <p>Switch To K version</p></div>
                <div><MdAddCircleOutline /> <p>Install App</p></div>
              
        </div>
           
    </div>
  )
}

export default Hamburgar