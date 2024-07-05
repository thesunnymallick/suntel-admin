import React from 'react'

const CardItem = ({
    name,
    img,
    para,
}) => {
  return (
    <div className='w-full rounded-md overflow-hidden relative'>
      <img className='w-full rounded-md h-44 object-cover' src={img} alt={name} />
      <div className='absolute inset-0 
       bg-gradient-to-t from-blue-950  
      via-transparent  to-slate-800 opacity-90 flex flex-col justify-end'>
        <h2 className='text-white text-2xl font-bold text-center tracking-[7px] '>{name}</h2>
        <p className='text-gray-100 font-semibold text-[0.5rem] text-center
         mb-2 mt-10'>{para}</p>
      </div>
    </div>
  )
}

export default CardItem
