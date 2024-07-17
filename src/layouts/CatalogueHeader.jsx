import React, { useState } from 'react'
import notImage from "../assets/notImage.jpg"
const CatalogueHeader = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const  catalogueItems=[
        {
            title:"General",
            submenu:false,
        },
        {
            title:"Gift Card",
            submenu:true,
            submenuItem:[
                {
                    title :"Smartphone",
                    items:[
                        {
                            title:"Smartphone",
                            img: notImage,
                        },
                        {
                            title:"Compare",
                            img: notImage,
                        },
                        {
                            title:"Airpods",
                            img: notImage,
                        },
                    ]
                },
                {
                    title :"Smartphone",
                    items:[
                        {
                            title:"Smartphone",
                            img: notImage,
                        },
                        {
                            title:"Compare",
                            img:notImage,
                        },
                        {
                            title:"Airpods",
                            img: notImage,
                        },
                    ]
                }
            ]
        },
        {
            title:"Payment Card",
            submenu:false,
        }
    ];


  return (
    <div
     onMouseLeave={() => setActiveIndex(null)} 
     className='bg-zinc-50 fixed lg:sticky top-[10.30%] z-40 
     border-y-[1px] border-zinc-300'>
    <ul className='flex items-center gap-10 h-11 relative  lg:px-6 px-2 '>
        {catalogueItems.map((item, index) => (
           <>
            <li
                key={index}
                className='cursor-pointer text-zinc-800 font-bold text-sm py-3 duration-300 transform transition-transform hover:border-b-2 hover:border-b-blue-700 h-11'
                onMouseEnter={() => setActiveIndex(index)}
               
            >
                {item.title}
                
            </li>

            {item.submenu && activeIndex === index && (
                    <div className='absolute left-0 top-full w-full bg-zinc-50  px-6
                     '>
                        <ul className='w-full  grid grid-cols-1 md:grid-cols-2 
                        lg:grid-cols-4 pb-4 px-2 pt-3'>
                            {item.submenuItem.map((submenuItem, subIndex) => (
                                <li key={subIndex} className='text-zinc-800 font-bold'>
                                    {submenuItem.title}
                                    <ul className='mt-2 w-full'>
                                        {submenuItem.items.map((subItem, subItemIndex) => (
                                           <div key={subItemIndex}  className='flex items-center gap-3 mb-2'>
                                            <img className='w-10 h-10 rounded-md' src={subItem.img} alt={subItem.title} />
                                             <li className='text-zinc-700 font-semibold text-sm cursor-pointer hover:text-blue-700 duration-300 '>
                                                {subItem.title}
                                            </li>
                                           </div>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
             )}

           </>
        ))}
    </ul>
    </div>
  )
}

export default CatalogueHeader
