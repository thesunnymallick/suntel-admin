import React from 'react'
import ProfileCard from '../../components/profileCom/ProfileCard'
import Payments from '../../components/profileCom/Payments'

const ProfilePayments = () => {
  return (
    <div className='px-6 py-4 flex gap-6'>
    <ProfileCard/>
    <Payments/>
   </div>
  )
}

export default ProfilePayments

