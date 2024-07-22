import React from "react";
import profile2 from "../../assets/profile2.png";
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { MdSecurity } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegCreditCard } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const ProfileCard = () => {
  const { authInfo } = useSelector((state) => state.login);

  const location = useLocation(); 
  const profileItems=[
    {
        title:"Personal Info",
        path:"/profile/personal-info",
        icon: <CgProfile/>,
    },
    {
        title:"Security Settings",
        path:"/profile/security-settings",
        icon: <MdSecurity />,
    },
    {
        title:"Notifications",
        path:"/profile/notifications",
        icon: <IoMdNotificationsOutline/>,
    },
    {
        title:"Payments",
        path:"/profile/payments",
        icon: <FaRegCreditCard/>,
    }
  ]
  return (
    <div className="w-[25%] bg-white rounded-md shadow-sm ">
      <div
        className="flex flex-col  justify-center items-center 
        border-b-[1px] 
        border-b-zinc-300 px-2 py-4"
      >
        <img
          className="w-14 h-14 object-cover rounded-full mb-1"
          src={profile2}
          alt=""
        />
        <span className="text-xl text-zinc-700 font-semibold mb-0">{`
            ${authInfo?.authInfo?.first_name} ${authInfo?.authInfo?.last_name}
        `}</span>
        <span className="text-sm text-zinc-500 font-semibold mb-1">{`
            ${authInfo?.authInfo?.email}
        `}</span>
      </div>

      <div className="py-6">
        <ul className="flex flex-col gap-4 py-4">
            {
                profileItems.map((item, index)=>{
                    return(
                        <Link to={item?.path} 
                          key={index}
                          className={
                          `flex items-center gap-x-2 text-zinc-700 font-semibold text-lg
                           py-2  px-4 cursor-pointer hover:bg-blue-100 hover:text-blue-700  hover:border-l-2 hover:border-l-blue-700
                           transition-all duration-300
                           ${location.pathname===item.path && "bg-blue-100 text-blue-700  border-l-2 border-l-blue-700"}
                           `
                          }
                         
                        >
                            <span className="text-2xl">{item.icon}</span>
                            <span>{item.title}</span>
                        </Link>
                    )
                })
            }
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
