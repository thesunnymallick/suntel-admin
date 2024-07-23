import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const CartModal = () => {
    const { items } = useSelector((state) => state.cart);
  return (
    <div className='px-3 py-4'>
       <div className='flex justify-between items-center border-b-[1px] border-b-zinc-300 py-3 px-2'>
        <h2 className='text-xl text-zinc-800 font-semibold'>My Cart ({items.length})  </h2>
        <Link className='text-base font-semibold text-blue-700 hover:text-blue-800'>view cart</Link>
       </div>
    </div>
  )
}

export default CartModal
