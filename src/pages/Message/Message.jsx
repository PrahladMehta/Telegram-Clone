import React,{useContext}from 'react'
import { Usercontext } from '../../context/Usercontext';
import "./Message.css"
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineCall } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaRegSmile } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa6";
import { MdMicNone } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
const Message = () => {

      const{currChat,setCurrChat,users,responsive,setResponsive}=useContext(Usercontext);
      console.log(users);


  return (

  <div className={`message-page ${responsive&& 'responsive' }`}>   

  {
      currChat>=0&&

      <div className='message-subsection'>

<div className="message-page-top">
     <div className='message-page-top-left'>
     <FaArrowLeft onClick={()=>{setResponsive(false);setCurrChat(-1)}} className='back-icon' />
         <img src={users[currChat].img} alt="" />
         <div>
               <h3>{users[currChat].name}</h3>
               <p>last seen recently</p>

         </div>
     </div>
     <div className="message-page-top-right">
     <IoSearchOutline />
     <MdOutlineCall />
     <HiOutlineDotsVertical />
     </div>
</div>


<div className="message-box">{

   users[currChat].chat.map((value,idx)=>{
return(
<div className='message-view' key={idx}>
<div className='message recive'><p>{value.message}</p><p className='message-time'>{value.time}</p></div>
<div className="reply message"><p>{value.reply}</p><p className='message-time'>{value.replytime}</p></div>
</div>
    ) })

}




</div>

<div className='message-input'>

<div className='message-input-box'>
<FaRegSmile />
    <input type="text" placeholder='Message' />
   <FaPaperclip />
</div>

<MdMicNone />

</div>

</div>  

  }







        </div>





  )
}

export default Message;