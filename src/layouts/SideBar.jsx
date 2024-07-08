import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

import { MdArrowBackIosNew } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Sidebar = () => {
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "User", link: "/", icon: AiOutlineUser },
    { name: "Gift Card", link: "/", icon: FiMessageSquare, 
      submenu:true, 
      submenuItems:[
        {
          name:"Steam",
          link :"/giftCard/steam"
        },
      ] },
    { name: "Analytics", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Cart", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen]=useState(false)
  return (
   <div  
    className={`bg-blue-800 duration-300  bg-gradient-to-b from-blue-950 h-screen sticky top-0 p-5 pt-8 ${open===true? "w-60" :"w-20"} `} >
     <div className="w-full h-full relative"> 
     <span 
      onClick={ ()=>setOpen(!open)}
     className="w-10 h-10 flex justify-center
      items-center rounded-full bg-blue-800 border-white border-[1px]
       text-white text-xl absolute -right-9 -top-3 cursor-pointer">
      <MdArrowBackIosNew className={`${!open && "rotate-180"}`}/>
     </span>

       <ul className="pt-6">
        {
          menus.map((item, index)=>{
            return(
             <>
              <Link
              to={item.link} 
              key={index} 
              className={`flex items-center gap-x-4 
                text-base text-gray-300 cursor-pointer p-2 hover:bg-blue-900 rounded-md
                 ${item?.margin===true? "mt-9" : "mt-2"}
                `}
              >
                <span className="text-2xl block float-left duration-500">{React.createElement(item?.icon)}</span>
               <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>{item?.name}</span>
                {
                  item?.submenu && open && <MdOutlineKeyboardArrowDown className={`text-xl ${subMenuOpen && "rotate-180"}`} onClick={()=>setSubMenuOpen(!subMenuOpen)}/>
                }
              </Link>

                {
                  item?.submenu && subMenuOpen && open && (
                    <ul>
                      {
                        item?.submenuItems.map((item, index)=>{
                          return(
                            <Link
                              key={index}
                              to={item?.link}
                              className={`flex items-center gap-x-4 
                              text-sm text-gray-300 ml-4 cursor-pointer p-2 hover:bg-blue-900 rounded-md
                               duration-300
                              `}
                             >
                               <span className="duration-500">{item?.name}</span>
                            </Link>
                          )
                        })
                      }
                    </ul>
                  )
                }
             </>
            )
          })
        }
       </ul>
     </div>

    

     

   </div>
  );
};


export default Sidebar