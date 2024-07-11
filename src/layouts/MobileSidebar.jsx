import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useDispatch } from "react-redux";
import { closeSidebarMenu } from "../feature/menuHandelSlice";
import { addLogout } from "../feature/addLoginSlice";
import { FiLogOut } from "react-icons/fi";
const MobileSidebar = ({ menus, subMenuOpen, setSubMenuOpen, mobileOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelCloseModal = () => {
    dispatch(closeSidebarMenu());
  };

  const logoutHandel = () => {
    dispatch(addLogout());
    navigate("/login");
  };

  return (
    <div
      onClick={handelCloseModal}
      className="bg-transparent w-full h-screen fixed 
      *:top-0  transition-transform duration-300 ease-in-out z-50"
    >
      <div
        className={`bg-blue-800   
        bg-gradient-to-b from-blue-950 p-5 pt-8  h-full  w-[70%] 
    ${
      mobileOpen === true
        ? "translate-x-0 animate-slideIn"
        : "-translate-x-full animate-slideOut"
    }
    
    `}
      >
        <div className="w-full h-full relative pt-2">
          <ul className="pt-10">
            {menus.map((item, index) => {
              return (
                <>
                  <Link
                    to={item.link}
                    key={index}
                    onClick={handelCloseModal}
                    className={`flex items-center gap-x-4 
                      text-base text-gray-300 cursor-pointer p-2 hover:bg-blue-900 rounded-md
                      ${item?.margin === true ? "mt-9" : "mt-2"}
                      `}
                  >
                    <span className="text-2xl block float-left duration-500">
                      {React.createElement(item?.icon)}
                    </span>
                    <span className={`text-base font-medium flex-1 `}>
                      {item?.name}
                    </span>
                    {item?.submenu && (
                      <MdOutlineKeyboardArrowDown
                        className={`text-xl ${subMenuOpen && "rotate-180"}`}
                        onClick={() => setSubMenuOpen(!subMenuOpen)}
                      />
                    )}
                  </Link>

                  {item?.submenu && subMenuOpen && (
                    <ul>
                      {item?.submenuItems.map((item, index) => {
                        return (
                          <Link
                            key={item?.name}
                            to={item?.link}
                            className={`flex items-center gap-x-4 
                          text-sm text-gray-300 ml-4 cursor-pointer p-2 hover:bg-blue-900 rounded-md
                           duration-300
                          `}
                          >
                            <span className="duration-500">{item?.name}</span>
                          </Link>
                        );
                      })}
                    </ul>
                  )}
                </>
              );
            })}

            <li
              onClick={logoutHandel}
              className={`flex items-center gap-x-4 
              text-base text-gray-300 cursor-pointer p-2 hover:bg-blue-900 rounded-md 
          `}
            >
              <span className="text-2xl block float-left duration-500">
                <FiLogOut />
              </span>
              <span className={`text-base font-medium flex-1 `}>Log out</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
