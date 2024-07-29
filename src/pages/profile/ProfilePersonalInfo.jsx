import React from 'react'
import PersonalInfo from '../../components/profileCom/PersonalInfo'
import ProfileCard from '../../components/profileCom/ProfileCard'

const ProfilePersonalInfo = () => {
  return (
    <div className='px-6 py-4 flex gap-6'>
    <ProfileCard/>
    <PersonalInfo/>
   </div>
  )
}

export default ProfilePersonalInfo
