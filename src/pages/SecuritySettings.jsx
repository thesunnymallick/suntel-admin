import React from 'react'
import Sidebar from '../layouts/SideBar'
import NavBar from '../layouts/NavBar'
import ProfileCard from '../components/profileCom/ProfileCard'
import SecuritySettingInfo from '../components/profileCom/SecuritySettingInfo'

const SecuritySettings = () => {
  return (
    <section className="flex  bg-zinc-50">
      <Sidebar /> 
      <div className="flex-1 ">
      <NavBar />

      <div className='px-6 py-4 flex gap-6'>
       <ProfileCard/>
       <SecuritySettingInfo/>
      </div>

      </div>
    </section>
  )
}

export default SecuritySettings
