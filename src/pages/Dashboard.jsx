
import React from 'react'
import Sidebar from '../layouts/SideBar'
import NavBar from '../layouts/NavBar'
import CardItem from '../components/dashboardCom/CardItem'
import {data as cardData, data2 as cardData2} from "../utils/cardData"
const Dashboard = () => {

  
  return (
   <section className='flex gap-6 bg-zinc-50'>
     <Sidebar/>
     <div className='flex-1 '>
        <NavBar/>

        <div className='px-6'>
           <h1 className='text-zinc-700 font-medium'>Newest product added</h1>

           <div className=' mt-2 
             grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-2'>
             {
               cardData.map((item, index)=>{
                return (
                  <CardItem 
                    key={item}
                    name={item?.name}
                    img={item?.img}
                    para={item?.para}
                  />
                )

               })
             }
           </div>

        </div>

        <div className='px-6  mt-6'>
           <h1 className='text-zinc-700 font-medium'>Featured  for you</h1>

           <div className=' mt-2 
             grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-2'>
             {
               cardData2.map((item, index)=>{
                return (
                  <CardItem 
                    key={item}
                    name={item?.name}
                    img={item?.img}
                    para={item?.para}
                  />
                )

               })
             }
           </div>

        </div>
     </div>
   </section>
  )
}

export default Dashboard
