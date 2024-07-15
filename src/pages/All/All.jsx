import React,{useContext} from 'react'
import { Usercontext } from '../../context/Usercontext'
import Users from '../../components/Users/Users';
const All = () => {

      const {users}=useContext(Usercontext);

      // console.log(users);
  return (
    <div>
        {
        users.map((value,idx)=>{

          return(
          <Users key={idx} user_name={value.name} img={value.img} lastMess={value.chat[value.chat.length-1]} idx={idx}></Users>
          )

        }


        )
      }
    </div>
  )
}

export default All;