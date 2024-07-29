import React from 'react'
import ProfileCard from '../../components/profileCom/ProfileCard'
import SecuritySettingInfo from '../../components/profileCom/SecuritySettingInfo'

const SecuritySettings = () => {
  return (
    <div className='px-6 py-4 flex gap-6'>
    <ProfileCard/>
    <SecuritySettingInfo/>
   </div>
  )
}

export default SecuritySettings
