import React,{useContext} from 'react'
import "./Users.css";
import { Usercontext}  from '../../context/Usercontext';

const Users = ({user_name,img,lastMess,idx}) => {

  // console.log(lastMess);
  // console.log(idx);

   const {setCurrChat,currChat,setResponsive}=useContext(Usercontext);
  return (
    <div className={ `user ${currChat===idx&& "color"}`}  onClick={()=>{setCurrChat(idx); setResponsive(true)}}> 
    
      <img src={img} alt="" className='user-img' />

      <div className='user-info'>
      <div>
      <p className='user-name'>{user_name|| "User123" }  </p>
      <p className='user-date'>{lastMess.replydate}</p>
      </div>


      <div>
      <p className='user-message'>{lastMess.reply.length< 20?lastMess.reply:`${lastMess.reply.substring(0,25)}...`}</p>
      <p className='user-mess-time'>{lastMess.replytime}</p>
      </div>
      
      
      </div>


    </div>
  )
}

export default Users;