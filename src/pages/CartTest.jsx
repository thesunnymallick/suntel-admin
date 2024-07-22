import React from 'react'
import Sidebar from '../layouts/SideBar'
import NavBar from '../layouts/NavBar'

const CartTest = () => {
  return (
    <section className="flex  bg-zinc-50">
    <Sidebar/>
    <div className="flex-1 ">
      <NavBar/>

      <h1>HI</h1>
    </div>
  </section>
  )
}

export default CartTest
