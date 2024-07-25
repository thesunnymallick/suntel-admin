import { Checkbox, Table } from 'antd'
import React from 'react'

const Notification = () => {

  const columns=[
    {
      title:"Activities",
      dataIndex:"activities",
      key:"activities"
    },
    {
      title:"Email",
      dataIndex:"email",
      key:"email",
      render: ()=>{
       return (
        <Checkbox/> 
        // onChange={onChange}
       )
      }

    },
    {
      title:"Push",
      dataIndex:"push",
      key:"push",
      render: ()=>{
        return (
         <Checkbox/> 
         // onChange={onChange}
        )
       }
    },
    {
      title:"SMS",
      dataIndex:"sms",
      key:"sms",
      render: ()=>{
        return (
         <Checkbox/> 
         // onChange={onChange}
        )
       }
    },
  ]

  const dataSource=[
    {
      activities:"Direct messages"
    },
    {
      activities:"Reminders"
    },
    {
      activities:"Important news and updates"
    },
  ]
  return (
    <div className='flex-1 bg-white rounded-md shadow-sm px-2'>
     <div className='py-6 px-4'>
      <h2 className='text-zinc-800 font-semibold text-xl'>Notifications Settings</h2>
       <p className='text-zinc-500 text-sm'>Choose for which activities you want to get an email or push notification.</p>
       <div className='px-2 pt-4'>
       <Table dataSource={dataSource} columns={columns} pagination={false}/>
       </div>
     </div>
    </div>
  )
}

export default Notification
