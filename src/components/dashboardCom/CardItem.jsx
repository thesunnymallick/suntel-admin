import React from 'react'
import { Link } from 'react-router-dom'

const CardItem = ({
    name,
    img,
    para,
}) => {
  return (
    <Link 
    to={`/giftCard/steam/${name}`}  
    className='w-36 h-40 rounded-md overflow-hidden relative cursor-pointer'>
    <img className='w-full rounded-md h-44 object-cover' src={img} alt={name} />
    <div className='absolute inset-0 
    bg-gradient-to-t from-blue-950  
    via-transparent  to-slate-800 opacity-90 flex flex-col justify-end'>
        <h2 className='text-white text-sm font-bold text-center tracking-[0px] '>{name}</h2>
        <p className='text-gray-100 font-semibold text-[0.5rem] text-center
         mb-2 mt-10'>{para}</p>
      </div>
    </Link>
  )
}

export default CardItem
