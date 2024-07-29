import React from 'react'
import Notification from '../../components/profileCom/Notification'
import ProfileCard from '../../components/profileCom/ProfileCard'

const ProfileNotifications = () => {
  return (
   <div className='px-6 py-4 flex gap-6'>
    <ProfileCard/>
    <Notification/>
   </div>
  )
}

export default ProfileNotifications
