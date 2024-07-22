import React from 'react'
import Sidebar from '../layouts/SideBar'
import NavBar from '../layouts/NavBar'
import PersonalInfo from '../components/profileCom/PersonalInfo'
import ProfileCard from '../components/profileCom/ProfileCard'

const ProfilePersonalInfo = () => {
  return (
    <section className="flex  bg-zinc-50">
      <Sidebar /> 
      <div className="flex-1 ">
      <NavBar />

      <div className='px-6 py-4 flex gap-6'>
       <ProfileCard/>
       <PersonalInfo/>
      </div>

      </div>
    </section>
  )
}

export default ProfilePersonalInfo
