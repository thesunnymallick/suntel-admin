import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addLogout } from "../feature/addLoginSlice";
import { FaBoxOpen } from "react-icons/fa";
import MobileSidebar from "./MobileSidebar";
import { closeSidebarMenu } from "../feature/menuHandelSlice";
import { GrCatalog } from "react-icons/gr";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "General", link: "/general", icon: GrCatalog },
    { name: "User", link: "/", icon: AiOutlineUser },
    {
      name: "Gift Card",
      link: "/",
      icon: FiMessageSquare,
      submenu: true,
      submenuItems: [
        {
          name: "Steam",
          link: "/",
        },
      ],
    },
    { name: "Products", link: "/products", icon: FaBoxOpen },
    { name: "Analytics", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Cart", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const {sidebarMobileMenu}=useSelector((state)=>state.menus)
  const logoutHandel = () => {
      dispatch(addLogout());
      navigate("/login");
  };

  

  return (
    <>
      <div
        className={`bg-blue-800 duration-300  bg-gradient-to-b
        from-blue-950 h-screen hidden lg:block lg:sticky top-0  p-5 pt-8 ${
          open === true ? "w-60" : "w-20"
        } `}
      >
        <div className="w-full h-full relative">
          <span
            onClick={() => setOpen(!open)}
            className="w-10 h-10 flex justify-center
            items-center rounded-full bg-blue-800 border-white border-[1px]
           text-white text-xl absolute -right-9 -top-3 cursor-pointer"
          >
            <MdArrowBackIosNew className={`${!open && "rotate-180"}`} />
          </span>

          <ul className="pt-6">
            {menus.map((item, index) => {
              return (
                <>
                  <Link
                    to={item.link}
                    key={index}
                    
                    className={`flex items-center gap-x-4 
                    text-base text-gray-300 cursor-pointer p-2 hover:bg-blue-900 rounded-md
                 ${item?.margin === true ? "mt-9" : "mt-2"}
                `}
                  >
                    <span className="text-2xl block float-left duration-500">
                      {React.createElement(item?.icon)}
                    </span>
                    <span
                      className={`text-base font-medium flex-1 ${
                        !open && "hidden"
                      }`}
                    >
                      {item?.name}
                    </span>
                    {item?.submenu && open && (
                      <MdOutlineKeyboardArrowDown
                        className={`text-xl ${subMenuOpen && "rotate-180"}`}
                        onClick={() => setSubMenuOpen(!subMenuOpen)}
                      />
                    )}
                  </Link>

                  {item?.submenu && subMenuOpen && open && (
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
      {sidebarMobileMenu  && <MobileSidebar 
      menus={menus} 
      subMenuOpen={subMenuOpen}
      setSubMenuOpen={setSubMenuOpen}
      logoutHandel={logoutHandel} 
      mobileOpen={sidebarMobileMenu}
      />}
    </>
  );
};

export default Sidebar;
