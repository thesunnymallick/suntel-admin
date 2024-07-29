import React from 'react'
import Sidebar from './SideBar'
import  Header  from '../layouts/NavBar'

const RootLayout = ({children, showHeader=true, showSidebar=true}) => {
  return (
   <>
    <div className='flex'>
       {showSidebar &&  <Sidebar/>}
      <div className='bg-zinc-50 flex-1'>
      {showHeader && <Header/>}
       {children}
      </div>
    </div>
   </>
  )
}

export default RootLayout
