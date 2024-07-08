import { Avatar, Input } from 'antd'
import React from 'react'
import { FiSearch } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";
import { MdZoomOutMap } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import profile2 from "../assets/profile2.png"
const NavBar = () => {
  return (
    <div className=' py-4 w-full flex items-center justify-between'>
      <div className='w-[30%]'>
      <Input 
      style={{width:"100%", height:"40px"}}
      className='w-full' size="large" 
      placeholder="Search" 
      prefix={<FiSearch className='text-zinc-400'/>}
      suffix={<CiFilter className='text-zinc-400'/>}
      
       />
    
      </div>
      <div className='px-6'>
        <ul className='flex gap-4 items-center'>
            <span className='text-2xl cursor-pointer'><MdZoomOutMap/></span>
            <span className='text-2xl cursor-pointer'><IoIosNotificationsOutline/></span>
            <span className='text-2xl cursor-pointer'><CiSettings/></span>
            <Avatar src={<img src={profile2} alt="avatar" />} />
            <span className='text-xl'>Sunny</span>
        </ul>
      </div>


    </div>
  )
}

export default NavBar
