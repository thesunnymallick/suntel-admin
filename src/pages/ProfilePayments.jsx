import React from 'react'
import Sidebar from '../layouts/SideBar'
import NavBar from '../layouts/NavBar'
import ProfileCard from '../components/profileCom/ProfileCard'
import Payments from '../components/profileCom/Payments'

const ProfilePayments = () => {
  return (
    <section className="flex  bg-zinc-50">
      <Sidebar /> 
      <div className="flex-1 ">
      <NavBar />

    
      <div className='px-6 py-4 flex gap-6'>
       <ProfileCard/>
       <Payments/>
      </div>

      </div>
    </section>
  )
}

export default ProfilePayments

